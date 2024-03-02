class Seat {
    bgColor: string;
    color: string;
    disabled: boolean;
    label: string;
    icon: string;
    isSelected: boolean;
    isDriver: boolean;
    isTaken: boolean;
    row: number;
    column: number;
    seatNumber: string;
    seatType: 'standard' | 'premium' | 'vip';

    constructor(row: number, column: number, seatType: 'standard' | 'premium' | 'vip' = 'standard') {
        const isDriver = row === 0 && column === 0
        this.bgColor = 'bg-white';
        this.color = '';
        this.disabled = false;
        this.row = row;
        this.column = column;
        this.label = '';
        this.seatNumber = this.label;
        this.icon = isDriver ? 'mdi-bus' : '';
        this.isSelected = false;
        this.isDriver = isDriver;
        this.isTaken = Math.random() < 0.5;
        this.seatType = seatType;
    }
    public convertToTakenSeat(guestName: string) {
        this.isTaken = true
        this.label = this.seatNumber + ': ' + guestName
        this.bgColor = 'error'
    }
}
export {
    Seat
}
