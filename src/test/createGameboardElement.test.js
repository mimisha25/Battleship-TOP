import { createGameboardElement } from '../dom/createGameboardElement.js';
import { handleDragOver } from '../dom/handleDragOver.js';
import { handleDrop } from '../dom/handleDrop.js';

jest.mock('../dom/handleDragOver.js', () => ({
    handleDragOver: jest.fn(),
}));

jest.mock('../dom/handleDrop.js', () => ({
    handleDrop: jest.fn(),
}));

describe('createGameboardElement', () => {
    let gameboardContainer;

    beforeEach(() => {
        gameboardContainer = document.createElement('div');
        gameboardContainer.id = 'player1';
        document.body.appendChild(gameboardContainer);
    });

    afterEach(() => document.body.innerHTML = '');

    test('should create a 10x10 grid of cells for the gameboard', () => {
        createGameboardElement('player1');
        const gameboard = gameboardContainer.querySelector('.gameboard');
        const cells = gameboard.querySelectorAll('.cell');
        expect(cells.length).toBe(100);
    });

    test("should attach dragover and drop event listeners for player board", () => {
        const addEventListenerSpy = jest.spyOn(HTMLElement.prototype, "addEventListener");
        createGameboardElement("player1");
        const cells = gameboardContainer.querySelectorAll(".cell");
        cells.forEach(cell => {
            expect(addEventListenerSpy).toHaveBeenCalledWith("dragover", expect.any(Function));
            expect(addEventListenerSpy).toHaveBeenCalledWith("drop", expect.any(Function));
        });
        addEventListenerSpy.mockRestore();
    });

    test("should not attach dragover and drop event listeners for computer board", () => {
        const addEventListenerSpy = jest.spyOn(HTMLElement.prototype, "addEventListener");
        createGameboardElement("player1", true);
        const cells = gameboardContainer.querySelectorAll(".cell");
        cells.forEach(cell => {
            expect(addEventListenerSpy).not.toHaveBeenCalledWith("dragover", expect.any(Function));
            expect(addEventListenerSpy).not.toHaveBeenCalledWith("drop", expect.any(Function));
        });
        addEventListenerSpy.mockRestore();
    });

    test("should add computer-cell class for the computer board cells", () => {
        createGameboardElement("player1", true);
        const cells = gameboardContainer.querySelectorAll(".cell");
        cells.forEach(cell => {
            expect(cell.classList.contains("computer-cell")).toBe(true);
        });
    });
});
