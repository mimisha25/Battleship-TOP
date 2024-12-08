import { Ship } from './ship.js';
export class Gameboard {
    constructor(playerId, isComputer = false) {
        this.ships = [];
        this.missedAttacks = [];
        this.board = this.createBoard();
        this.playerId = playerId;
        this.isComputer = isComputer;
    }

    createBoard() {
        const board = [];
        for (let row = 0; row < 10; row++) {
            const rowCells = [];
            for (let col = 0; col < 10; col++) {
                rowCells.push({ hit: false, ship: null });
            }
            board.push(rowCells);
        }
        return board;
    }

    setShips(shipArray) {
        this.ships = shipArray;
        shipArray.forEach(ship => {
            ship.coordinates.forEach(coord => {
                this.board[coord.row][coord.col].ship = ship;
            });
        });
    }

}