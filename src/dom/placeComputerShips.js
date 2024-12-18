import { canPlaceComputerShip } from "./canPlaceComputerShip";
import { setComputerShips } from "./setComp.js";

let computerShips = [];

export function placeComputerShips() {
    const shipSizes = [1, 2, 3, 4, 5];
    const boardSize = 10;
    const placedShips = [];

    shipSizes.forEach(size => {
        let placed = false;
        while (!placed) {
            const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
            const row = Math.floor(Math.random() * boardSize);
            const col = Math.floor(Math.random() * boardSize);
            if (canPlaceComputerShip(row, col, size, orientation, placedShips)) {
                const shipCoordinates = [];
                for (let i = 0; i < size; i++) {
                    const targetCell = orientation === 'horizontal' ?
                        document.querySelector(`#computer-board [data-row="${row}"][data-col="${col + i}"]`) :
                        document.querySelector(`#computer-board [data-row="${row + i}"][data-col="${col}"]`);
                    targetCell.classList.add('ship-placement');
                    shipCoordinates.push({ row: row + (orientation === 'vertical' ? i : 0), col: col + (orientation === 'horizontal' ? i : 0) });
                }
                computerShips.push({ size, coordinates: shipCoordinates });
                placedShips.push({ row, col, size, orientation });
                placed = true;
            }
        }
    });
    setComputerShips(computerShips);
}