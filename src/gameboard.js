import { Ship } from './ship.js';
export class Gameboard {
    constructor(playerId, isComputer = false) {
        this.ships = [];
        this.missedAttacks = [];
        this.board = this.createBoard();
        this.playerId = playerId;
        this.isComputer = isComputer;
    }

}