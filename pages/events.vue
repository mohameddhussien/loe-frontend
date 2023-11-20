<template>
    <v-container fluid>
        <v-row>
            <v-col data-aos="fade" data-aos-duration="1000" v-for="(event, card_id) in events"
                class="d-flex justify-center">
                <div class="d-flex flex-column gap-y-2">
                    <v-carousel :data-aos="`fade-${windowWidth < 600 ? (card_id % 2 == 0 ? 'right' : 'left') : 'up'}`"
                        data-aos-duration="1000" data-aos-delay="200"
                        style="width: 300px; height: 300px; border-radius: 10px;" cycle :show-arrows="false"
                        hide-delimiter-background class="elevation-5">
                        <v-carousel-item v-for="(image, index) in event.images" :key="index" :src="image" cover>
                        </v-carousel-item>
                    </v-carousel>
                    <span class="font-sans d-flex justify-between">
                        <span class="font-bold text-xl">{{ event.name }}</span>
                        <SpecialTextDesign class="text-sm top-[-5px]" data-aos="fade-down" data-aos-duration="1000"
                            color="before:bg-crayota-200" :to-be-decorated="`${event.price}EGP`" />
                    </span>
                    <span class="save-badge text-[rgb(128,0,0)] bg-[#f8dddd] d-flex gap-2">
                        <v-icon icon="mdi-minus" size="small" />
                        <p>{{ event.status }}</p>
                        <p class="ml-auto">{{ event.date }}</p>
                    </span>
                    <v-btn-group style="min-width: 300px; width: 300px;" rounded density="compact" variant="outlined"
                        divided>
                        <v-btn :to="{ path: `/event/${event.name.replaceAll(' ', '')}`, query: { key: card_id } }"
                            min-width="64%" prepend-icon="mdi-book-outline">See details!</v-btn>
                        <v-btn min-width="34%" prepend-icon="mdi-seat-outline">Book</v-btn>
                    </v-btn-group>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { getEvent } from '~/server/api/getEvent';
const events = ref(getEvent())
const windowWidth = ref(window.innerWidth)
const eventdate = new Date(convertDate(events.value[0].date))
function convertDate(str) {
    return str.split('/').reverse().join('/');
}
function getStatus(param) {
    var diff = 0;
    const currentDate = new Date();
    param.forEach(element => {
        const eventdate = new Date(convertDate(element.date))

        if (eventdate.getFullYear() - currentDate.getFullYear() == 0) {
            if (eventdate.getMonth() - currentDate.getMonth() == 0) {
                console.log(eventdate.getDate() - currentDate.getDate())
            }
        }
    });
}
getStatus(events.value)

console.log(eventdate)

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