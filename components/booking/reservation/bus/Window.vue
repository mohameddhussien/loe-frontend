<template>
    <BookingBaseWindow title="Bus Reservation">
        <v-row no-gutters class="gap-x-5">
            <h1 class="text-3xl font-italic mb-4">Seats Available -> {{ personCounter.toString() }}</h1>
        </v-row>
        <BusReservationContent />
    </BookingBaseWindow>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>