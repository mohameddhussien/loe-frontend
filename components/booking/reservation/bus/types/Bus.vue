<template>
    <BusReservationBase :seats="busActions.seats" #default="{ seat }">
        <BusReservationSeat :is-not-seat="disabledSeats" :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
const props = defineProps({
    capacity: Number
})
const busActions = useBus(props.capacity)
const disabledSeats = busActions.getDisabledSeats();
console.log('asdas')
createSeatsArray(disabledSeats, busCapacity.value)

</script>

<style scoped></style>