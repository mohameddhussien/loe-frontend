import { Seat } from '@/classes/seat'
import type { SeatIndices } from '@/interfaces/SeatIndices'
function rowIndex(seat: Seat): number {
    const charCodeA = 'A'.charCodeAt(0);  // Get the character code of 'A'
    return seat.row.charCodeAt(0) - charCodeA; // Subtract to get the zero-based index
}
const takenSeats = ref(0)
const busCapacity = ref<SeatIndices>({ deckIndex: 1, seatIndex: 1 })
const useBus = () => {
    const defaultSeats = Array.from({ length: busCapacity.value.deckIndex }, (_, i) =>
        Array.from({ length: busCapacity.value.seatIndex }, (_, j) => new Seat(String.fromCharCode(65 + i), j))
    );
    // const transposedSeats = defaultSeats[0].map((_, colIndex) => defaultSeats.map(row => row[colIndex]));
    // const seats = ref<Seat[][]>(window.innerWidth <= 1282 ? transposedSeats : defaultSeats);
    const seats = ref<Seat[][]>(defaultSeats);
    //Get type of bus from composable to change the default seats array length
    const customClass = (seat?: Seat) => {
        if (!seat)
            return;
        return {
            'mb-1 max-[465px]:scale-[0.8]': true,
            'bg-green-lighten-2': seat.isSelected,
        }
    }
    // const handleResize = () => {
    //     const WindowSize = window.innerWidth;
    //     if (WindowSize <= 1020) {
    //         seats.value = transposedSeats;
    //     } else {
    //         seats.value = defaultSeats
    //     }
    // };
    const customHover = (seat?: Seat) => {
        if (!seat)
            return;
        if (seat.isTaken)
            return 'bg-error'
        if (seat.isSelected)
            return 'bg-green-accent-2'
        return 'bg-green-lighten-4 scale-[0.9]'
    }



    const getBgColor = (seat?: Seat): string => {
        if (!seat)
            return "";
        if (seat.isTaken)
            return 'red-lighten-2';

        return seat.isSelected ? 'green' : 'white';
    };

    const selectSeat = (seat?: Seat) => {
        if (!seat)
            return;
        const mySeat: Seat = seat;
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
        console.log(personCounter.value)
        if (takenSeats.value >= personCounter.value)
            return;
        mySeat.bgColor = 'bg-green-lighten-1';
        takenSeats.value++
        mySeat.isSelected = true
    }

    return {
        customClass,
        customHover,
        getBgColor,
        selectSeat,
        takenSeats,
        // handleResize,
        seats
    }
}
export {
    rowIndex,
    useBus,
    takenSeats,
    busCapacity,
}
