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
    getRandomLabel(): string {
        const rows = ['A', 'B', 'C', 'D'];
        const randomRow = rows[Math.floor(Math.random() * rows.length)]; // Select a random row
        const randomColumn = Math.floor(Math.random() * 13) + 1; // Generate a random column in the range [1, 13]

        return `${randomRow}${randomColumn}`;
    }
}
export {
    Seat
}
