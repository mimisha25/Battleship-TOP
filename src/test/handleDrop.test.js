import { handleDrop } from '../dom/handleDrop.js';
import { canPlaceShip } from '../dom/canPlaceShip.js';
import { afterDrop } from '../dom/afterDrop.js';
import { playerShips } from '../dom/handleDrop.js';


jest.mock('../dom/canPlaceShip.js', () => ({
    canPlaceShip: jest.fn(),
}));

jest.mock('../dom/afterDrop.js', () => ({
    afterDrop: jest.fn(),
}));

describe('handleDrop', () => {
    let cell, event, shipSize;

    beforeEach(() => {
        cell = document.createElement('div');
        cell.dataset.row = '2';
        cell.dataset.col = '3';
        event = {
            preventDefault: jest.fn(),
            dataTransfer: { getData: jest.fn().mockReturnValue('3') },
        };
        playerShips.length = 0;
        canPlaceShip.mockReturnValue(true);
        const board = document.createElement('div');
        board.id = 'player-board';
        document.body.appendChild(board);
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const newCell = document.createElement('div');
                newCell.classList.add('cell');
                newCell.dataset.row = row;
                newCell.dataset.col = col;
                board.appendChild(newCell);
            }
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = '';
    });

    test('should prevent the default drop behavior', () => {
        handleDrop(event, cell);
        expect(event.preventDefault).toHaveBeenCalled();
    });

    test("should place the ship and update playerShips", () => {
        handleDrop(event, cell);
        expect(playerShips).toHaveLength(1);
        expect(playerShips[0].size).toBe(3);
        expect(playerShips[0].coordinates).toEqual([{ row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 }]);
    });

    test("should add the ship-placement class to the correct cells for horizontal placement", () => {
        handleDrop(event, cell);
        const targetCell1 = document.querySelector(`[data-row="2"][data-col="3"]`);
        const targetCell2 = document.querySelector('[data-row="2"][data-col="4"]');
        const targetCell3 = document.querySelector('[data-row="2"][data-col="5"]');
        expect(targetCell1.classList.contains("ship-placement")).toBe(true);
        expect(targetCell2.classList.contains('ship-placement')).toBe(true);
        expect(targetCell3.classList.contains('ship-placement')).toBe(true);
    });

    test("should call afterDrop with playerShips", () => {
        handleDrop(event, cell);
        expect(afterDrop).toHaveBeenCalledWith(playerShips);
    });

    test("should not place the ship if it cannot be placed", () => {
        canPlaceShip.mockReturnValue(false);
        handleDrop(event, cell);
        expect(playerShips).toHaveLength(0);
    });
});
