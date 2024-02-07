<template>
    <BusReservationBase :seats="busActions.seats" #default="{ seat }">
        <BusReservationSeat :is-not-seat="isNotSeat28" :seat="seat" />
    </BusReservationBase>
</template>

<script lang="ts" setup>
import { Seat } from '~/classes/seat';
import type { SeatIndices } from '~/interfaces/SeatIndices';
busCapacity.value = { deckIndex: 9, seatIndex: 5 }
const busActions = useBus()
createSeatsArray(isNotSeat28, busCapacity.value)

function notSeat(seat: Seat): boolean {
    const seatIndices: SeatIndices | undefined = {
        deckIndex: seat.row,
        seatIndex: seat.column
    };

    const deckIndex = seatIndices.deckIndex;
    const seatIndex = seatIndices.seatIndex;

    return (deckIndex === 0 && (seatIndex >= 1 && seatIndex <= 3)) ||
        (deckIndex === 1) || (deckIndex === 2 && (seatIndex >= 2))
        || (deckIndex >= 3 && deckIndex < 8 && seatIndex === 2);
}

function isNotSeat28(seat: Seat): boolean {
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