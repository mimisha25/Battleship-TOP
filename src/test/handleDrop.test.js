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
});
