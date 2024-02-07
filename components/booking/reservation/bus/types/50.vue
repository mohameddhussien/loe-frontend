<template>
    <BusReservationBase :seats="busActions.seats" #default="{ seat }">
        <BusReservationSeat :is-not-seat="isNotSeat50" :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
import { createSeatsArray } from '~/composables/useBus';
import type { SeatIndices } from '~/interfaces/SeatIndices';
const busActions = useBus()
busCapacity.value = { deckIndex: 14, seatIndex: 5 }
createSeatsArray(notSeat, busCapacity.value)

function notSeat(seat: Seat): boolean {
    const seatIndices: SeatIndices | undefined = {
        deckIndex: seat.row,
        seatIndex: seat.column
    };

    const deckIndex = seatIndices.deckIndex;
    const seatIndex = seatIndices.seatIndex;

    return (deckIndex === 0 && (seatIndex >= 1 && seatIndex < 4)) ||
        (seatIndex === 2 && deckIndex !== 13) ||
        ((deckIndex === 6 || deckIndex === 7) && (seatIndex === 3 || seatIndex === 4))
}
const isNotSeat50 = (seat: Seat): boolean => {
    const seatIndices: SeatIndices | undefined = {
        deckIndex: seat.row,
        seatIndex: seat.column
    };

    const deckIndex = seatIndices.deckIndex;
    const seatIndex = seatIndices.seatIndex;

    const isNotSeat = ref<boolean>(false)
    isNotSeat.value = notSeat(seat)
    if (deckIndex === 0 && seatIndex === 4) {
        seat.isTaken = true
        seat.icon = 'mdi-account-multiple'
        seat.label = ''
    }
    if (isNotSeat.value) {
        seat.disabled = true
        seat.label = ''
    }
    return isNotSeat.value
};
</script>

<style scoped></style>