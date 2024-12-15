import { handleDragStart } from "./handleDragStart";
import { handleDragEnd } from "./handleDragEnd";
export function displayShipsNearBoard() {
    const shipsContainer = document.getElementById("ships-container");
    const shipSizes = [1, 2, 3, 4, 5];
    const h3 = document.createElement("h3");
    h3.innerHTML = "Please, drag and drop ships on your board";
    shipsContainer.appendChild(h3);

    shipSizes.forEach((size, index) => {
        const ship = document.createElement("div");
        ship.classList.add("ship-row");
        ship.dataset.shipSizes = size;

        for (let i = 0; i < size; i++) {
            const shipCell = document.createElement("div");
            shipCell.classList.add("ship-cell");
            shipCell.setAttribute("draggable", "true");
            shipCell.dataset.shipSize = size;
            shipCell.dataset.shipIndex = index;
            shipCell.addEventListener("dragstart", (event) => handleDragStart(event, ship));
            shipCell.addEventListener("dragend", (event) => handleDragEnd(event));
            ship.appendChild(shipCell);
        }
        shipsContainer.appendChild(ship);
    })
}