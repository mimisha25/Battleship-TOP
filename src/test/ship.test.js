import { Ship } from "../ship";

describe("Ship Class", () => {
    let ship;

    beforeEach(() => {
        ship = new Ship(3);
    });

    test("should create a ship with the correct length", () => {
        expect(ship.length).toBe(3);
        expect(ship.hits).toBe(0);
        expect(ship.sunk).toBe(false);
        expect(ship.coordinates).toEqual([]);
    });

    test("should increment hits when the ship is hit", () => {
        ship.hit();
        expect(ship.hits).toBe(1);
        expect(ship.sunk).toBe(false);
    });

    test("should sink the ship when the number of hits is equal to the length", () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(3);
        expect(ship.sunk).toBe(true);
    });

    test("should not sink the ship before the number of hits equals its length", () => {
        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(2);
        expect(ship.sunk).toBe(false);
    });
    test("should return true when the ship is sunk and false when it is not", () => {
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
})