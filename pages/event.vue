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
                            color="bg-pink-accent-2" />
                    </v-card-title>
                    <v-card-subtitle>
                        {{ event.PRICE }}EGP
                    </v-card-subtitle>
                    <v-card-text>
                        <ExpandText :content="event.DESCRIPTION" />
                    </v-card-text>
                    <v-card-actions>
                        <Whatsapp :event="event" />
                        <my-btn icon="mdi-facebook" href="https://www.facebook.com/EventsforLadies/" size="small" />
                    </v-card-actions>
                    <v-card-actions class="flex-wrap gap-2">
                        <my-btn @click="openBookingDetails" prepend-icon="mdi-seat-outline" size="large">Book trip</my-btn>
                        <my-btn @click="incrementPersonCounter" size="small" icon="mdi-menu-up-outline" />
                        <my-btn @click="decrementPersonCounter" size="small" icon="mdi-menu-down-outline" />
                        <SpecialTextDesign class="text-2xl mx-auto" :toBeDecorated="personCounter.toString()" after="People"
                            color="bg-pink-accent-2" />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { getEventByID } from '@/composables/store/useEvents';
import { openDialog, personCounter } from '@/composables/dialogActions';
import { hasToken as authenticated } from '@/composables/store/session';
import { showSnackbar } from '@/composables/snackBarActions'


const event = ref(await getEventByID(useRoute().query.key));

useHead({
    title: event.value.EVENT_NAME,
})
definePageMeta({
    middleware: ['event-not-found'],
})
const incrementPersonCounter = () => {
    personCounter.value = personCounter.value < 10 ? personCounter.value + 1 : personCounter.value;
};
const decrementPersonCounter = () => {
    personCounter.value > 1 ? personCounter.value-- : personCounter.value = personCounter.value;
};
const openBookingDetails = () => {
    openDialog(event.value)
    // if (authenticated.value)
    //     openDialog(event.value)
    // else {
    //     showSnackbar({ snackbarText: 'Prior to booking an event or trip, please ensure you have successfully logged in.', color: 'error' })
    //     navigateTo('/login');
    // }
}
</script>
<style lang="scss" scoped></style>