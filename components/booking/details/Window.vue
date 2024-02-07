<template>
    <BookingBaseWindow title="Booking Details">
        <v-row no-gutters justify="space-between" class="mx-2 gap-x-5">
            <h1 class="text-3xl font-italic mb-4">Number of People -> {{ personCounter.toString() }}</h1>
            <div class="gap-x-1 d-flex">
                <my-btn @click="bookingActions.AddAdult()" :disabled="personCounter >= 10" size="x-small" icon="mdi-menu-up-outline" />
                <my-btn @click="bookingActions.removeAdult()" :disabled="personCounter <= 0" size="x-small" icon="mdi-menu-down-outline" />
            </div>
        </v-row>
        <BookingDetailsContent />
    </BookingBaseWindow>
</template>

<script lang="ts" setup>
import { Adult } from '@/classes/person';
const Adults = inject<Adult[]>('adults', []);
const bookingActions = useBooking(Adults)
</script>

<style lang="scss" scoped></style>