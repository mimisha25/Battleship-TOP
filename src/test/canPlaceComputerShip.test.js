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

    test("should return false if a ship overlaps with an already placed ship horizontally", () => {
        placedShips.push({ row: 1, col: 1, size: 3, orientation: "horizontal" });
        document.querySelector(`#computer-board [data-row="1"][data-col="1"]`).classList.add('ship-placement');
        document.querySelector(`#computer-board [data-row="1"][data-col="2"]`).classList.add('ship-placement');
        document.querySelector(`#computer-board [data-row="1"][data-col="3"]`).classList.add('ship-placement');
        const canPlace = canPlaceComputerShip(1, 2, 3, "horizontal", placedShips);
        expect(canPlace).toBe(false);
    });

    test("should return true if a ship can be placed vertically without overlap", () => {
        placedShips.push({ row: 1, col: 1, size: 3, orientation: "vertical" });
        const canPlace = canPlaceComputerShip(4, 1, 3, "vertical", placedShips);
        expect(canPlace).toBe(true);
    });

    test("should return false if a ship overlaps with an already placed ship vertically", () => {
        placedShips.push({ row: 1, col: 1, size: 3, orientation: "vertical" });
        document.querySelector(`#computer-board [data-row="1"][data-col="1"]`).classList.add('ship-placement');
        document.querySelector(`#computer-board [data-row="2"][data-col="1"]`).classList.add('ship-placement');
        document.querySelector(`#computer-board [data-row="3"][data-col="1"]`).classList.add('ship-placement');
        const canPlace = canPlaceComputerShip(2, 1, 3, "vertical", placedShips);
        expect(canPlace).toBe(false);
    });

    test("should return false if a ship goes out of bounds horizontally", () => {
        const canPlace = canPlaceComputerShip(0, 8, 3, "horizontal", placedShips);
        expect(canPlace).toBe(false);
    });

    test("should return false if a ship goes out of bounds vertically", () => {
        const canPlace = canPlaceComputerShip(8, 0, 3, "vertical", placedShips);
        expect(canPlace).toBe(false);
    });
})