<template>
    <BusReservationBase #default="{ seat }">
        <BusReservationSeat :is-not-seat="isNotSeat50" :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
import type { SeatIndices } from '~/interfaces/SeatIndices';
busCapacity.value = { deckIndex: 14, seatIndex: 5 }

const isNotSeat50 = (seat: Seat): boolean => {
    const seatIndices: SeatIndices | undefined = {
        deckIndex: rowIndex(seat),
        seatIndex: seat.column
    };
    const isNotSeat = ref<boolean>(false)
    const deckIndex = seatIndices.deckIndex;
    const seatIndex = seatIndices.seatIndex;
    isNotSeat.value = (deckIndex === 0 && (seatIndex >= 1 && seatIndex < 4)) ||
        (seatIndex === 2 && deckIndex !== 13) ||
        ((deckIndex === 6 || deckIndex === 7) && (seatIndex === 3 || seatIndex === 4))
    if (deckIndex === 0 && seatIndex === 0) {
        seat.isTaken = true
        seat.icon = 'mdi-bus'
        seat.label = ''
    }
    if (deckIndex === 0 && seatIndex === 4) {
        seat.isTaken = true
        seat.icon = 'mdi-account-multiple'
        seat.label = ''
    }
    if (isNotSeat.value)
        seat.label = ''
    return isNotSeat.value
};
</script>

<style scoped></style>