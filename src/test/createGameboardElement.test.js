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

});
