import { canPlaceShip } from "../dom/canPlaceShip";

describe("canPlaceShip", () => {
    let mockCells;

    beforeEach(() => {
        mockCells = [];

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement("div");
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                cell.classList.add("cell");
                mockCells.push(cell);
                document.body.appendChild(cell);
            }
        }
    });

    afterEach(() => {
        mockCells.forEach(cell => cell.remove());
    });

    test("should return false if ship is out of bounds horizontally", () => {
        const row = 5;
        const col = 9;
        const shipSize = 2;
        const orientation = "horizontal";
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(false);
    });

    test("should return false if ship is out of bounds vertically", () => {
        const row = 8;
        const col = 3;
        const shipSize = 3;
        const orientation = "vertical";
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(false);
    });

    test("", () => {

    });
});