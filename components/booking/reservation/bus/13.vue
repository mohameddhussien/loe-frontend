<template>
    <BusReservationBase #default="{ seat }">
        <BusReservationSeat :is-not-seat="isNotSeat13" :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
import type { SeatIndices } from '~/interfaces/SeatIndices';
busCapacity.value = { deckIndex: 6, seatIndex: 4 }

const isNotSeat13 = (seat: Seat): boolean => {
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
    return (deckIndex === 0 && (seatIndex >= 1 && seatIndex <= 2)) ||
        (deckIndex === 1) || (deckIndex === 2 && (seatIndex >= 2 && seatIndex <= 3))
        || (deckIndex >= 3 && deckIndex <= 4 && seatIndex === 2);
};
</script>

<style scoped></style>