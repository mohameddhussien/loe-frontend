<template>
    <v-container fluid>
        <v-row>
            <v-col v-for="(event, key) in events" :key="key" class="d-flex justify-center relative">
                <v-img style="position: absolute; z-index: 1; bottom: -2px;"
                    v-if="statusMappings.some(mapping => event.STATUS in mapping)" :src="getImageUrl(event.STATUS)"
                    aspect-ratio="2/1" width="100"></v-img>
                <div class="d-flex flex-column gap-y-4">
                    <v-carousel style="width: 300px; height: 300px; border-radius: 10px;" cycle :show-arrows="false"
                        hide-delimiter-background class="elevation-5">
                        <v-carousel-item v-for="image in event.IMAGES" :src="image" cover />
                    </v-carousel>
                    <span class="font-sans d-flex justify-between">
                        <span class="font-bold text-xl">{{ event.EVENT_NAME }}</span>
                        <SpecialTextDesign class="text-sm top-[-5px]"
                            :color="[`before:bg-crayota-200 ${event.STATUS === 'Sold Out!' ? 'line-through' : ''}`]"
                            :to-be-decorated="`${event.PRICE}EGP`" />
                    </span>
                    <span class="save-badge text-[rgb(128,0,0)] bg-[#f8dddd] d-flex gap-2">
                        <v-icon icon="mdi-minus" size="small" />
                        <p>{{ event.STATUS }}</p>
                        <p class="ml-auto">{{ format(new Date(event.EVENT_DATE), 'dd-MM-yyyy') }}</p>
                    </span>
                    <v-btn-group style="min-width: 300px; width: 300px;" rounded density="compact" variant="outlined"
                        divided>
                        <v-btn :disabled="statusMappings.some(mapping => event.STATUS in mapping)"
                            :to="{ path: `/event`, query: { key: event.EVENT_KEY } }" min-width="64%"
                            prepend-icon="mdi-book-outline">See details!</v-btn>
                        <v-btn :disabled="statusMappings.some(mapping => event.STATUS in mapping)"
                            @click="openDialog(event)" min-width="34%" prepend-icon="mdi-seat-outline">Book</v-btn>
                    </v-btn-group>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { format } from 'date-fns';
import { getAllEvents } from '~/server/api/getAllEvents';
import { openDialog } from '@/composables/dialogActions';

const events = ref(await getAllEvents())

const statusMappings = ref([{ 'Sold Out!': 'sold_out.png' }, { 'Coming Soon!': 'coming_soon.png' }])
const getImageUrl = (status) => {
    const mapping = statusMappings.value.find(mapping => status in mapping);
    return mapping ? mapping[status] : null;
};
//  On window resize hide drawer
const windowWidth = ref(window.innerWidth)
const onWidthChange = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>
<style scoped>
.save-badge {
    min-width: 300px;
    width: 300px;
    border-radius: 16px;
    font-size: 13px;
    font-weight: 500;
    padding: 0 10px;
    vertical-align: middle;
}
</style>