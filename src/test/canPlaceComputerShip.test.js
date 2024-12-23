import { canPlaceComputerShip } from "../dom/canPlaceComputerShip.js";

describe("", () => {
    let placedShips;

    beforeEach(() => {
        placedShips = [];
        document.body.innerHTML = `
        <div id="computer-board">
            ${Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) =>
                `<div data-row="${row}" data-col="${col}" class="cell"></div>`
            ).join('')
        ).join('')}
        </div>
    `;
    });

    test("should return true if a ship can be placed horizontally without overlap", () => {
        placedShips.push({ row: 1, col: 1, size: 3, orientation: "horizontal" });
        const canPlace = canPlaceComputerShip(1, 4, 3, "horizontal", placedShips);
        expect(canPlace).toBe(true);
    });

})