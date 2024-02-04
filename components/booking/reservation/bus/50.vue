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
    const deckIndex = seatIndices.deckIndex;
    const seatIndex = seatIndices.seatIndex;
    if (deckIndex === 0 && seatIndex === 0) {
        seat.isTaken = true
        seat.label = 'D'
    }

    return (deckIndex === 0 && (seatIndex >= 1 && seatIndex < 4)) ||
        (seatIndex === 2 && deckIndex !== 13) ||
        ((deckIndex === 6 || deckIndex === 7) && (seatIndex === 3 || seatIndex === 4))
};
</script>

<style scoped></style>