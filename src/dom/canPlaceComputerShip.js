export function canPlaceComputerShip(row, col, shipSize, orientation, placedShips) {
    const boardSize = 10;
    if (orientation === "horizontal" && col + shipSize > boardSize) return false;
    if (orientation === "vertical" && row + shipSize > boardSize) return false;
    for (let i = 0; i < shipSize; i++) {
        const targetCell = orientation === 'horizontal' ?
            document.querySelector(`#computer-board [data-row="${row}"][data-col="${col + i}"]`) :
            document.querySelector(`#computer-board [data-row="${row + i}"][data-col="${col}"]`);
        if (targetCell.classList.contains('ship-placement')) return false;
    }
    return true;
}