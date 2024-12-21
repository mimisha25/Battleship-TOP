import { handleDragEnd } from "../dom/handleDragEnd.js";

describe("handleDragEnd", () => {
    let event, target, shipClone, ship;

    beforeEach(() => {
        target = document.createElement("div");
        target.classList.add("dragging");
        shipClone = document.createElement("div");
        shipClone.classList.add("ship-clone");
        target.shipClone = shipClone;
        ship = document.createElement("div");
        ship.classList.add("ship");
        target.ship = ship;
        document.body.appendChild(shipClone);
        document.body.appendChild(ship);
        event = { target };
    });

    test("should remove the shipClone from the document body", () => {
        handleDragEnd(event);
        expect(document.body.contains(shipClone)).toBe(false);
    });

    test("should remove the ship from its initial position", () => {
        handleDragEnd(event);
        expect(document.body.contains(ship)).toBe(false);
    });
})