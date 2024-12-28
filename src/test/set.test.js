import { setPlayerShips, playerGameboard } from "../dom/set.js";
import { Ship } from "../ship.js";
import { Gameboard } from "../gameboard.js";
import { experiments } from "webpack";

jest.mock("../ship.js", () => {
    return {
        Ship: jest.fn().mockImplementation(size => {
            return {
                size: size,
                coordinates: []
            }
        })
    }
});

jest.mock("../gameboard.js", () => {
    return {
        Gameboard: jest.fn().mockImplementation(() => {
            return {
                setShips: jest.fn()
            }
        })
    }
});


describe("setPlayerShips", () => {

    beforeEach(() => {
        playerGameboard.setShips.mockClear();
    });

    test("should createship instances with the correct size and coordinates", () => {
        const playerShips = [
            { size: 3, coordinates: ["A1", "A2", "A3"] },
            { size: 5, coordinates: ["B1", "B2", "B3", "B4", "B5"] }
        ];
        setPlayerShips(playerShips);
        expect(Ship).toHaveBeenCalledTimes(2);
        expect(Ship).toHaveBeenNthCalledWith(1, 3);
        expect(Ship.mock.results[0].value.coordinates).toEqual(["A1", "A2", "A3"]);
        expect(Ship).toHaveBeenNthCalledWith(2, 5);
        expect(Ship.mock.results[1].value.coordinates).toEqual(["B1", "B2", "B3", "B4", "B5"])
    });

    test("should call setShips on the playerGameboard with the correct ships", () => {
        const playerShips = [
            { size: 3, coordinates: ['A1', 'A2', 'A3'] },
            { size: 5, coordinates: ['B1', 'B2', 'B3', 'B4', 'B5'] }
        ];
        setPlayerShips(playerShips);
        expect(playerGameboard.setShips).toHaveBeenCalledTimes(1);
        const ships = playerGameboard.setShips.mock.calls[0][0];
        expect(ships[0].size).toBe(3);
        expect(ships[0].coordinates).toEqual(["A1", "A2", "A3"]);
        expect(ships[1].size).toBe(5);
        expect(ships[1].coordinates).toEqual(["B1", "B2", "B3", "B4", "B5"]);
    });
})