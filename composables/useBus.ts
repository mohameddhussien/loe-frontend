import { Seat } from '@/classes/seat'
import type { SeatIndices } from '@/interfaces/SeatIndices'
const takenSeats = ref(0)
const busCapacity = ref<SeatIndices>({ deckIndex: 1, seatIndex: 1 })
// let defaultSeats = Array.from({ length: busCapacity.value.deckIndex }, (_, i) =>
//     Array.from({ length: busCapacity.value.seatIndex }, (_, j) => new Seat(String.fromCharCode(65 + i), j))
// );
const seats = ref<Seat[][]>([]);
export const createSeatsArray = (notSeat: (seat: Seat) => boolean, busCapacity: SeatIndices) => {
    let seatCounter: number = 0
    seats.value = Array.from({ length: busCapacity.deckIndex }, (_, i) => {
        let decks = []
        decks = Array.from({ length: busCapacity.seatIndex }, (_, j) => {
            const mySeat = new Seat(i, j)
            if (notSeat(mySeat) || (i == 0 && j == 0))
                return mySeat;
            seatCounter++
            mySeat.label = `${seatCounter}`;
            return mySeat
        })
        return decks
    })
}
const useBus = () => {
    const customClass = (seat?: Seat) => {
        if (!seat)
            return;
        return {
            'bg-green-lighten-2': seat.isSelected,
            'border-0': seat.disabled,
        }
    }
    const customHover = (seat?: Seat) => {
        if (!seat)
            return;
        if (seat.isDriver)
            return 'bg-blue-lighten-4'
        if (seat.isTaken)
            return 'bg-error'
        if (seat.isSelected)
            return 'bg-green-accent-2'
        return 'bg-green-lighten-4 scale-[0.9]'
    }



    const getBgColor = (seat?: Seat): string => {
        if (!seat)
            return "";
        seat.bgColor = 'red-lighten-2'
        if (seat.isDriver)
            return 'blue-lighten-2'
        if (seat.isTaken)
            return seat.bgColor;

        seat.bgColor = seat.isSelected ? 'green' : 'white';
        return seat.bgColor
    };

    const selectSeat = (seat?: Seat) => {
        if (!seat)
            return;
        if (seat.isDriver) {
            seat.bgColor = 'bg-blue-lighten-2';
            return;
        }
        if (seat.isTaken) {
            seat.bgColor = 'bg-red-lighten-2';
            return;
        }
        if (seat.isSelected) {
            seat.bgColor = 'bg-white';
            takenSeats.value--
            seat.isSelected = false
            return;
        }
        if (takenSeats.value >= personCounter.value)
            return;
        seat.bgColor = 'bg-green-lighten-1';
        takenSeats.value++
        seat.isSelected = true
    }

    return {
        customClass,
        customHover,
        getBgColor,
        selectSeat,
        seats,
        takenSeats,
        // handleResize,
    }
}
export {
    useBus,
    takenSeats,
    busCapacity,
}
