<template>
    <v-container fluid class="font-sans">
        <v-row>
            <v-col xl="3" xxl="4" lg="5" md="5" cols="12">
                <v-carousel cycle hide-delimiter-background :show-arrows="false" :touch="true"
                    style="border-radius: 5px; height: 500px;">
                    <v-carousel-item v-for="(image) in event.IMAGES" :src="image" cover />
                </v-carousel>
            </v-col>
            <v-col>
                <v-card class="d-flex flex-column" variant="text">
                    <v-card-title>
                        <SpecialTextDesign class="text-4xl ma-3" :toBeDecorated="event.EVENT_NAME"
                            color="before:bg-crayota-200" />
                    </v-card-title>
                    <v-card-subtitle>
                        {{ event.PRICE }}EGP
                    </v-card-subtitle>
                    <v-card-text>
                        <ExpandText :content="event.DESCRIPTION" />
                    </v-card-text>
                    <v-card-actions>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn variant="outlined" icon="mdi-whatsapp" v-bind="props"
                                    class="border border-pink-darken-2 ma-1 hover:scale-105  hover:bg-[#F06292] hover:text-white"
                                    size="small" />
                            </template>
                            <v-list>
                                <v-list-item v-for="organizer in organizers" prepend-icon="mdi-whatsapp" value="wp"
                                    :href="`https://wa.me/${organizer.phone}?text=Tell+me+more+about+${event.EVENT_NAME}+trip`">
                                    <v-list-item-title><span style="font-family: 'Poppins', sans-serif;">{{ organizer.name
                                    }}</span></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn variant="outlined" icon="mdi-facebook"
                            class="border border-pink-darken-2 ma-1 hover:scale-105  hover:bg-[#F06292] hover:text-white"
                            href="https://www.facebook.com/EventsforLadies/" size="small" />
                    </v-card-actions>
                    <v-card-actions class="flex-wrap gap-2">
                        <v-btn @click="personCounter > 0 ? auth() : openErrorDialog = true" variant="outlined"
                            id="activator" prepend-icon="mdi-seat-outline"
                            class="border border-pink-darken-2 ma-0 hover:scale-105  hover:bg-[#F06292] hover:text-white book-trip"
                            size="large">Book trip</v-btn>
                        <v-btn @click="personCounter < 10 ? personCounter++ : personCounter = personCounter"
                            variant="outlined" icon="mdi-menu-up-outline"
                            class="border border-pink-darken-2 ma-0 hover:scale-105  hover:bg-[#F06292] hover:text-white"
                            size="small" />
                        <v-btn @click="personCounter > 0 ? personCounter-- : personCounter = personCounter"
                            variant="outlined" icon="mdi-menu-down-outline"
                            class="border border-pink-darken-2 ma-0 hover:scale-105  hover:bg-[#F06292] hover:text-white"
                            size="small" />
                        <SpecialTextDesign class="text-2xl mx-auto" :toBeDecorated="personCounter.toString()" after="People"
                            color="before:bg-crayota-200" />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { getEventByID } from '~/server/api/getEventByID';
import { openDialog, personCounter } from '~/store/dialogActions';
import { hasToken } from '~/store/session';
import { showSnackbar } from '@/composables/store/snackBarActions'

const event = ref((await getEventByID(useRoute().query.key)).data);
const organizers = ref([
    { name: "Rania", phone: "+201001611961" },
    { name: "Menna", phone: "+201150663066" },
])

useHead({
    title: event.value.EVENT_NAME,
})
definePageMeta({
    middleware: ['event-not-found'],
})

const auth = () => {
    if (hasToken.value)
        openDialog(event.value)
    else {
        showSnackbar()
        navigateTo('/login');
    }
    /*  Open Snackbar   */
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@900&family=Poppins:wght@400;500&display=swap');
</style>