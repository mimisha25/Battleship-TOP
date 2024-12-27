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

    test("should return false if the ship overlaps with an already placed ship horizontally", () => {
        const row = 2;
        const col = 2;
        const shipSize = 3;
        const orientation = "horizontal";
        const occupiedCells = [
            document.querySelector('[data-row="2"][data-col="2"]'),
            document.querySelector('[data-row="2"][data-col="3"]'),
            document.querySelector('[data-row="2"][data-col="4"]')
        ];
        occupiedCells.forEach(cell => cell.classList.add("ship-placement"));
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(false);
    });

    test("should return false if the ship overlaps with an already placed ship vertically", () => {
        const row = 2;
        const col = 2;
        const shipSize = 3;
        const orientation = 'vertical';
        const occupiedCells = [
            document.querySelector('[data-row="2"][data-col="2"]'),
            document.querySelector('[data-row="3"][data-col="2"]'),
            document.querySelector('[data-row="4"][data-col="2"]')
        ];
        occupiedCells.forEach(cell => cell.classList.add('ship-placement'));
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(false);
    });

    test("should return true if the ship fits horizontally and no cells are occupied", () => {
        const row = 5;
        const col = 3;
        const shipSize = 4;
        const orientation = 'horizontal';
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(true);
    });

    test("should return true if the ship fits vertically and no cells are occupied", () => {
        const row = 2;
        const col = 3;
        const shipSize = 3;
        const orientation = 'vertical';
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(true);
    });

    test("should return false if the ship is out of bounds and touches the edge vertically", () => {
        const row = 8;
        const col = 4;
        const shipSize = 3;
        const orientation = 'vertical';
        const result = canPlaceShip(row, col, shipSize, orientation);
        expect(result).toBe(false);
    });
});