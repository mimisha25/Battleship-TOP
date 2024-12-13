export let playerShips = [];
export function handleDrop(event, cell) {
    event.preventDefault();
    const shipSize = event.dataTransfer.getData('text/plain');
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    if (canPlaceShip(row, col, parseInt(shipSize), currentOrientation)) {
        const shipCoordinates = [];

        if (currentOrientation === 'horizontal') {
            for (let i = 0; i < parseInt(shipSize); i++) {
                const targetCell = document.querySelector(`[data-row="${row}"][data-col="${col + i}"]`);
                targetCell.classList.add('ship-placement');
                shipCoordinates.push({ row, col: col + i });
            }
        } else if (currentOrientation === 'vertical') {
            for (let i = 0; i < parseInt(shipSize); i++) {
                const targetCell = document.querySelector(`[data-row="${row + i}"][data-col="${col}"]`);
                targetCell.classList.add('ship-placement');
                shipCoordinates.push({ row: row + i, col });
            }
        }
        playerShips.push({ size: parseInt(shipSize), coordinates: shipCoordinates });
    }
    afterDrop(playerShips);
    cell.classList.remove('drop-target');
}
