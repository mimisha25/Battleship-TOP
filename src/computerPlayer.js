import { Player } from "./player";

const message = document.querySelector("#message");

export class ComputerPlayer extends Player {
    constructor(name, gameboard) {
        super(name, gameboard);
    }

    randomAttack(opponent) {
        setTimeout(() => {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (opponent.gameboard.board[x][y].hit);

            const result = opponent.gameboard.receiveAttack(x, y);
            console.log(`Computer attacks at [${x}, ${y}] and it was a ${result}`);
            const cell = document.querySelector(`[data-row="${x}"][data-col="${y}"]`);
            if (result === 'hit') {
                message.textContent = "Computer hit your ship";
                cell.classList.add('hit');
            } else {
                message.textContent = "Computer missed the attack";
                cell.textContent = "X";
                cell.classList.add('miss');
            }
            if (opponent.gameboard.allShipsSunk()) message.textContent = "Computer wins! All your ships are sunk.";
            return { result, x, y };
        }, 2000);
    };


}