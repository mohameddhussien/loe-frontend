import { Seat } from '@/classes/seat'
import type { SeatIndices } from '@/interfaces/SeatIndices'
const takenSeats = ref(0)
const busCapacity = ref<SeatIndices>({ deckIndex: 1, seatIndex: 1 })
// let defaultSeats = Array.from({ length: busCapacity.value.deckIndex }, (_, i) =>
//     Array.from({ length: busCapacity.value.seatIndex }, (_, j) => new Seat(String.fromCharCode(65 + i), j))
// );
const seats = ref<Seat[][]>([]);
export const createSeatsArray = (notSeat: ((seat: Seat) => boolean) | undefined, busCapacity: SeatIndices) => {
    let seatCounter: number = 0
    seats.value = Array.from({ length: busCapacity.deckIndex }, (_, i) => {
        let decks = []
        decks = Array.from({ length: busCapacity.seatIndex }, (_, j) => {
            const mySeat = new Seat(i, j)
            if (notSeat?.(mySeat) || (i == 0 && j == 0))
                return mySeat;
            seatCounter++
            mySeat.label = `${seatCounter}`;
            return mySeat
        })
        return decks
    })
}
const useBus = (capacity?: number) => {
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

    function isNotSeat13(seat: Seat): boolean {
        const seatIndices: SeatIndices | undefined = {
            deckIndex: seat.row,
            seatIndex: seat.column
        };
        const deckIndex = seatIndices.deckIndex;
        const seatIndex = seatIndices.seatIndex;
        const isNotSeat = ref<boolean>(false)
        isNotSeat.value = (deckIndex === 0 && (seatIndex >= 1 && seatIndex <= 2)) ||
            (deckIndex === 1) || (deckIndex === 2 && (seatIndex >= 2 && seatIndex <= 3))
            || (deckIndex >= 3 && deckIndex <= 4 && seatIndex === 2);
        if (deckIndex === 0 && seatIndex === 3) {
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
    const getDisabledSeats = () => {
        console.log('Hi')
        if (capacity === 13){
            busCapacity.value = { deckIndex: 6, seatIndex: 4 }
            return isNotSeat13
        }
        if (capacity === 28){
            busCapacity.value = { deckIndex: 9, seatIndex: 5 }
            return isNotSeat28
        }
        if (capacity === 50) {
            busCapacity.value = { deckIndex: 14, seatIndex: 5 }
            return isNotSeat50
        }

        //  Else-if's
    }

    function isNotSeat28(seat: Seat): boolean {
        const seatIndices: SeatIndices | undefined = {
            deckIndex: seat.row,
            seatIndex: seat.column
        };
        const deckIndex = seatIndices.deckIndex;
        const seatIndex = seatIndices.seatIndex;
        const isNotSeat = ref<boolean>(false)
        isNotSeat.value = (deckIndex === 0 && (seatIndex >= 1 && seatIndex <= 3)) ||
            (deckIndex === 1) || (deckIndex === 2 && (seatIndex >= 2))
            || (deckIndex >= 3 && deckIndex < 8 && seatIndex === 2);
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

    const isNotSeat50 = (seat: Seat): boolean => {
        const seatIndices: SeatIndices | undefined = {
            deckIndex: seat.row,
            seatIndex: seat.column
        };

        const deckIndex = seatIndices.deckIndex;
        const seatIndex = seatIndices.seatIndex;

        const isNotSeat = ref<boolean>(false)
        isNotSeat.value = (deckIndex === 0 && (seatIndex >= 1 && seatIndex < 4)) ||
            (seatIndex === 2 && deckIndex !== 13) ||
            ((deckIndex === 6 || deckIndex === 7) && (seatIndex === 3 || seatIndex === 4));
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

    return {
        customClass,
        customHover,
        getBgColor,
        selectSeat,
        seats,
        takenSeats,
        getDisabledSeats,
        // handleResize,
    }
}
export {
    useBus,
    takenSeats,
    busCapacity,
}
