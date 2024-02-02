<template>
    <v-container fluid>
        <v-stepper flat :items="['Booking Details', 'Bus Reservation', 'Other Activities']">
            <template #item.1>
                <BookingDetailsWindow />
            </template>
            <template #item.2>
                <BusReservationWindow />
            </template>
            <template #item.3>
                <h1 class="text-4xl font-bold mb-4">Other Activities</h1>
            </template>
            <!-- <v-stepper-actions>
                <template #next="{ props }">
                    <my-btn @click="() => props.onClick()" :border="false" prepend-icon="mdi-arrow-right"
                        on-hover="bg-pink-accent-1">Next
                        Step</my-btn>
                </template>
                <template #prev="{ props }">
                    <my-btn @click="() => props.onClick()" :border="false" prepend-icon="mdi-arrow-left"
                        on-hover="bg-pink-accent-1">Previous Step</my-btn>
                </template>
            </v-stepper-actions> -->
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