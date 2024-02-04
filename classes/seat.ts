class Seat {
    bgColor: string;
    color: string;
    disabled: boolean;
    label: string;
    icon: string;
    isSelected: boolean;
    isTaken: boolean;
    row: string;
    column: number;
    seatType: 'standard' | 'premium' | 'vip';

    constructor(row: string, column: number, seatType: 'standard' | 'premium' | 'vip' = 'standard') {
        this.bgColor = 'bg-white';
        this.color = '';
        this.disabled = false;
        this.row = row;
        this.column = column;
        this.label = `${this.row}${this.column}`;
        this.icon = '';
        this.isSelected = false;
        this.isTaken = Math.random() < 0.5;
        this.seatType = seatType;
    }
}
export {
    Seat
}
