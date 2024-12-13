
function createGameboardElement(playerId, isComputer = false) {
    const gameboardContainer = document.getElementById(playerId);
    const gameboard = document.createElement("div");
    gameboard.classList.add("gameboard");

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (!isComputer) {
                cell.addEventListener("dragover", (event) => handleDragOver(event, cell));
                cell.addEventListener("drop", (event) => handleDrop(event, cell));
            } else cell.classList.add("computer-cell");
            gameboard.appendChild(cell);
        } gameboardContainer.appendChild(gameboard);
    }
}