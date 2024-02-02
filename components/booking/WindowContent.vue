<template>
    <v-container>
        <v-stepper elevation="5" editable :items="['Booking Details', 'Bus Reservation', 'Other Activities']">
            <template v-slot:item.1>
                <BookingDetailsWindow />
            </template>
            <template v-slot:item.2>
                <BusReservationWindow />
            </template>
            <template v-slot:item.3>
                <h1 class="text-4xl font-bold mb-4">Other Activities</h1>
            </template>
            <!-- <template #actions="{ next, prev }">
                <v-container class="d-flex justify-space-between">
                    <my-btn @click="prev" :border="false" prepend-icon="mdi-arrow-left" on-hover="bg-pink-accent-1">Previous
                        Step</my-btn>
                    <my-btn @click="next" :border="false" prepend-icon="mdi-arrow-right" on-hover="bg-pink-accent-1">Next
                        Step</my-btn>
                </v-container>
            </template> -->
        </v-stepper>
    </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
* {
    font-family: 'Rethink Sans', sans-serif;
}
</style>