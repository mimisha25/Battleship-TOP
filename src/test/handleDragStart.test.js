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

    test("should set the correct data on the dataTransfer object", () => {
        handleDragStart(event, ship);
        expect(dataTransfer.setData).toHaveBeenCalledWith("text/plain", "3");
    });

    test("should add the dragging class to the target element", () => {
        handleDragStart(event, ship);
        expect(event.target.classList.contains("dragging")).toBe(true);
    });

    test("should store the ship in the target element", () => {
        handleDragStart(event, ship);
        expect(event.target.ship).toBe(ship);
    });

})