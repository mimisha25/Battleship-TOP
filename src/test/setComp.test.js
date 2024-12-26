import { setComputerShips, computerGameboard } from "../dom/setComp.js";
import { Gameboard } from "../gameboard.js";
import { Ship } from "../ship";

jest.mock("../gameboard.js", () => {
    return {
        Gameboard: jest.fn().mockImplementation(() => {
            return {
                setShips: jest.fn()
            }
        })
    };
});

jest.mock("../ship.js", () => {
    return {
        Ship: jest.fn().mockImplementation(size => {
            return {
                size,
                coordinates: []
            }
        })
    }
});

describe("setComputerShips", () => {
    let mockShips;

    beforeEach(() => {
        Gameboard.mockClear();
        Ship.mockClear();
        computerGameboard.setShips.mockClear();

        mockShips = [
            { size: 3, coordinates: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }] },
            { size: 2, coordinates: [{ x: 3, y: 3 }, { x: 3, y: 4 }] }];
    });


    test("should create ships and set them on the computer gameboard", () => {
        setComputerShips(mockShips);
        expect(Ship).toHaveBeenCalledTimes(2);
        expect(Ship).toHaveBeenCalledWith(3);
        expect(Ship).toHaveBeenCalledWith(2);
        const ship1 = Ship.mock.instances[0];
        const ship2 = Ship.mock.instances[1];
        ship1.coordinates = mockShips[0].coordinates;
        ship2.coordinates = mockShips[1].coordinates;
        expect(ship1.coordinates).toEqual(mockShips[0].coordinates);
        expect(ship2.coordinates).toEqual(mockShips[1].coordinates);
        expect(computerGameboard.setShips).toHaveBeenCalledWith([
            expect.objectContaining({ size: 3, coordinates: mockShips[0].coordinates }),
            expect.objectContaining({ size: 2, coordinates: mockShips[1].coordinates })
        ]);
    });

    test("should handle empty ships array gracefully", () => {
        setComputerShips([]);
        expect(computerGameboard.setShips).toHaveBeenCalledWith([]);
    });
});