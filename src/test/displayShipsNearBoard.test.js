import { displayShipsNearBoard } from '../dom/displayShipsNearBoard.js'; // Adjust path if necessary
import * as handleDragStartModule from '../dom/handleDragStart.js';
import * as handleDragEndModule from '../dom/handleDragEnd.js';

jest.mock('../dom/handleDragStart.js');
jest.mock('../dom/handleDragEnd.js');

describe('displayShipsNearBoard', () => {
    let shipsContainer;

    beforeEach(() => {
        document.body.innerHTML = '<div id="ships-container"></div>';
        shipsContainer = document.getElementById('ships-container');
    });

    test('should create ship rows and cells with correct size', () => {
        displayShipsNearBoard();
        const header = shipsContainer.querySelector('h3');
        expect(header).not.toBeNull();
        expect(header.innerText).toBe('Please, drag and drop ships on your board');
        const shipRows = shipsContainer.querySelectorAll('.ship-row');
        expect(shipRows.length).toBe(5);
        shipRows.forEach((shipRow, index) => {
            const shipCells = shipRow.querySelectorAll('.ship-cell');
            expect(shipCells.length).toBe(index + 1);
        });
    });

    test("should attach dragstart and dragend event listeners to ship cells", () => {
        displayShipsNearBoard();
        const shipCells = shipsContainer.querySelectorAll(".ship-cell");
        const dragStartSpy = jest.spyOn(handleDragStartModule, "handleDragStart");
        const dragEndSpy = jest.spyOn(handleDragEndModule, "handleDragEnd");
        shipCells.forEach(cell => {
            cell.dispatchEvent(new Event("dragstart"));
            cell.dispatchEvent(new Event("dragend"));
        });
        expect(dragStartSpy).toHaveBeenCalledTimes(shipCells.length);
        expect(dragEndSpy).toHaveBeenCalledTimes(shipCells.length);
        dragStartSpy.mockRestore();
        dragEndSpy.mockRestore();
    });
});