import { RealPlayer } from "./realPlayer.js";
import { ComputerPlayer } from "./computerPlayer.js";
import { playerGameboard } from "./dom/set.js";
import { computerGameboard } from "./dom/setComp.js";

const realPlayer = new RealPlayer("Player 1", playerGameboard);
const computerPlayer = new ComputerPlayer("Computer", computerGameboard);

export function addAttackEventListeners() {
    const playerBoardCells = document.querySelectorAll("#computer-board .cell");
    playerBoardCells.forEach(cell => {
        cell.addEventListener("click", (event) => {
            const x = parseInt(cell.dataset.row);
            const y = parseInt(cell.dataset.col);
            if (playerGameboard.allShipsSunk() || computerGameboard.allShipsSunk()) return;
            const result = realPlayer.attack(computerPlayer, x, y);
            console.log(`Player attacks at [${x},${y}] resulting in: ${result}`);
            if (!computerGameboard.allShipsSunk()) computerPlayer.attack(realPlayer);
        })
    })
}