export function canPlaceShip(row, col, shipSize, orientation) {
    if (orientation === "horizontal") {
        if (col + shipSize > 10) return false;
        for (let i = 0; i < shipSize; i++) {
            const targetCell = document.querySelector(`[data-row="${row}"][data-col="${col + i}"]`);
            if (targetCell.classList.contains('ship-placement')) return false;
        }
    } else if (orientation === "vertical") {
        if (row + shipSize > 10) return false;
        for (let i = 0; i < shipSize; i++) {
            const targetCell = document.querySelector(`[data-row="${row + i}"][data-col="${col}"]`);
            if (targetCell.classList.contains('ship-placement')) return false;
        }
    }
    return true;
}