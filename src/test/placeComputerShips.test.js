import { placeComputerShips } from "../dom/placeComputerShips.js";
import { canPlaceComputerShip } from "../dom/canPlaceComputerShip.js";
import { setComputerShips } from "../dom/setComp.js";

jest.mock("../dom/setComp.js", () => ({
    setComputerShips: jest.fn()
}));

jest.mock("../dom/canPlaceComputerShip.js", () => ({
    canPlaceComputerShip: jest.fn()
}));

global.document.querySelector = jest.fn();

describe("placeComputerShips", () => {

    test("should place ships of various sizes on the board", () => {
        canPlaceComputerShip.mockReturnValue(true);
        const mockCell = { classList: { add: jest.fn() } };
        document.querySelector.mockReturnValue(mockCell);
        placeComputerShips();
        expect(canPlaceComputerShip).toHaveBeenCalledTimes(5);
        expect(document.querySelector).toHaveBeenCalled();
        expect(mockCell.classList.add).toHaveBeenCalledWith("ship-placement");
        expect(setComputerShips).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({ size: 1 }),
            expect.objectContaining({ size: 2 }),
            expect.objectContaining({ size: 3 }),
            expect.objectContaining({ size: 4 }),
            expect.objectContaining({ size: 5 })
        ]))
    });
});
