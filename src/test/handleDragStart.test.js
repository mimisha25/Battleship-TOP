import { handleDragStart } from '../dom/handleDragStart.js';
describe("handleDragStart", () => {
    let event;
    let ship;
    let dataTransfer;

    beforeEach(() => {
        dataTransfer = {
            setData: jest.fn(),
            setDragImage: jest.fn()
        };

        ship = document.createElement("div");
        ship.dataset.shipSize = "3";
        event = {
            target: document.createElement("div"),
            dataTransfer
        };
    });
})