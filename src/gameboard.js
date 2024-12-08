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

    receiveAttack(x, y) {
        const cell = this.board[x][y];
        if (cell.hit) return null;
        cell.hit = true;
        if (cell.ship) {
            cell.ship.hit();
            if (cell.ship.isSunk()) console.log(`A ship has been sunk at [${x}, ${y}]`);
            return "hit";
        } else {
            this.missedAttacks.push([x, y]);
            console.log(`Miss at [${x}, ${y}]`);
            return "miss";
        }
    }

}