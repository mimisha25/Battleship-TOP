import { Player } from "./player";

const message = document.querySelector("#message");

export class RealPlayer extends Player {
    constructor(name, gameboard) {
        super(name, gameboard);
    }
    attack(opponent, x, y) {
        if (x < 0 || x >= 10 || y < 0 || y >= 10) throw new Error("Coordinates out of bounds!");
        const result = super.attack(opponent, x, y);
        const cell = document.querySelector(`#computer-board [data-row="${x}"][data-col="${y}"]`);
        if (result === 'hit') {
            message.textContent = "You hit the ship";
            cell.classList.add('hit');
        } else if (result === 'miss') {
            message.textContent = "You missed the attack";
            cell.textContent = "X";
            cell.classList.add('miss');
        }
        if (opponent.gameboard.allShipsSunk()) {
            console.log("All ships are sunk!");
            message.textContent = "You win! All enemy ships are sunk";
        } return result;
    }
}