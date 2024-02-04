<template>
  <v-item-group>
    <h1 class="text-xl text-grey mb-4">Choose your Seats</h1>

    <v-row v-for="(deck, deckIndex) in seats" :key="deckIndex">
      <v-col v-for="(seat, seatIndex) in deck" :key="seatIndex">
        <my-btn :ripple="!seat.isTaken" @click="selectSeat(deckIndex, seatIndex)" :on-hover="customHover(seat)"
          :bg-color="getBgColor(seat)" :class="customClass(seat)">{{ seat.label }}</my-btn>
      </v-col>
    </v-row>
    <!-- <v-row v-for="(row, rowIndex) in seats" :key="rowIndex">
      <v-col v-for="(btnObj, btn_index) in row" :key="btn_index">
        <v-btn @click="changeColor(btnObj)" :class="{
          [`bg-${btnObj.bgColor}`]: true, 'color-button border': true,
          'd-none': isButtonDisabled(rowIndex,btn_index)
        }" :icon="btnObj.icon" />
      </v-col>
    </v-row> -->
  </v-item-group>
</template>

<script lang="ts" setup>
import { Seat } from '@/classes/seat'
interface SeatIndices {
  deckIndex: number;
  seatIndex: number;
}
const takenSeats = ref(0)
const customClass = (seat: Seat) => {
  return {
    'bg-green-lighten-2': seat.isSelected,
    'd-none': isNotSeat(seat)
  }
}
const customHover = (seat: Seat) => {
  if (seat.isTaken)
    return 'bg-error'
  return 'bg-green-lighten-4'
}
const seats = reactive<Seat[][]>(Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 13 }, (_, j) => new Seat(String.fromCharCode(65 + i), j))
));
const getBgColor = (seat: Seat): string => {
  if (seat.isTaken)
    return 'red-lighten-2';

  return seat.isSelected ? 'green' : 'white';
};
const selectSeat = (deckIndex: number, seatIndex: number) => {
  const mySeat: Seat = seats[deckIndex][seatIndex];
  if (mySeat.isTaken) {
    mySeat.bgColor = 'bg-red-lighten-2';
    return;
  }
  if (mySeat.isSelected) {
    mySeat.bgColor = 'bg-white';
    takenSeats.value--
    mySeat.isSelected = false
    return;
  }
  if (takenSeats.value >= personCounter.value)
    return;
  mySeat.bgColor = 'bg-green-lighten-1';
  takenSeats.value++
  mySeat.isSelected = true
}

const findSpecificSeatIndices = (targetSeat: Seat): SeatIndices | undefined => {
  let indices: SeatIndices | undefined;

  seats.forEach((row, deckIndex) => {
    const seatIndex = row.indexOf(targetSeat);
    if (seatIndex !== -1 && !indices) {
      indices = { deckIndex, seatIndex };
    }
  });

  return indices;
}
const isNotSeat = (seat: Seat): boolean => {
  const seatIndices: SeatIndices | undefined = findSpecificSeatIndices(seat) as SeatIndices;

  if (!seatIndices)
    return false; // or handle the case where seat is not found
  const deckIndex = seatIndices.deckIndex;
  const seatIndex = seatIndices.seatIndex;
  return (deckIndex === 3 && (seatIndex === 6 || seatIndex === 7)) ||
    (deckIndex === 4 && (seatIndex === 6 || seatIndex === 7)) ||
    (deckIndex === 2 && (seatIndex >= 1 && seatIndex <= 12));
};
watchEffect(() => {
  console.log(takenSeats.value)
})
</script>

<style scoped>
.color-button {
  border: 3px;
  border-radius: 5px;
  /* Add your desired border style */
  padding: 2px;
  /* Add padding for better appearance */
  cursor: pointer;
}

.color-button:hover {
  background-color: green;
}

.bg-green-lighten-1 {
  background-color: #64DD17 !important;
}
</style>