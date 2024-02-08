<template>
    <BusReservationBase :seats="busActions.seats" #default="{ seat }">
        <BusReservationSeat @selected-seat="(mySeat) => $emit('selected-seat', mySeat)" :is-not-seat="disabledSeats"
            :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
const props = defineProps({
    capacity: Number
})
const busActions = useBus(props.capacity)
const disabledSeats = busActions.getDisabledSeats();
createSeatsArray(disabledSeats, busCapacity.value)

</script>

<style scoped></style>