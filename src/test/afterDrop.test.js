import { afterDrop } from "../dom/afterDrop.js";
import { setPlayerShips } from "../dom/set.js";

jest.mock("../dom/set.js");

describe("afterDrop", () => {

    beforeEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = `
        <div id="ships-container">
          <h3>Place your ships</h3>
          <div id="vertical"></div>
          <div id="horizontal"></div>
        </div>
        <div id="message"></div>
      `;
    });

    test("should update the DOM and call setPlayerShips when playerShips length is 5", () => {
        const playerShips = [1, 2, 3, 4, 5];
        afterDrop(playerShips);
        expect(document.querySelector("h3")).toBeNull();
        expect(document.querySelector("#vertical")).toBeNull();
        expect(document.querySelector('#horizontal')).toBeNull();
        expect(document.querySelector('#message').textContent).toBe("Now start attack the computer's board");
        expect(setPlayerShips).toHaveBeenCalledTimes(1);
        expect(setPlayerShips).toHaveBeenCalledWith(playerShips);
    });

    test("should not call setPlayerShips if playerShips length is not 5", () => {
        const playerShips = [1, 2, 3];
        afterDrop(playerShips);
        expect(setPlayerShips).not.toHaveBeenCalled();
        expect(document.querySelector('h3')).not.toBeNull();
        expect(document.querySelector('#vertical')).not.toBeNull();
        expect(document.querySelector('#horizontal')).not.toBeNull();
        expect(document.querySelector('#message').textContent).toBe('');
    });
})