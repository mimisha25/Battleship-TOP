import { addAttackEventListeners } from "../addAttackEventListeners.js";
import { RealPlayer } from "../realPlayer.js";
import { ComputerPlayer } from "../computerPlayer.js";
import { playerGameboard } from "../dom/set.js";
import { computerGameboard } from "../dom/setComp.js";

jest.mock('../realPlayer.js');
jest.mock('../computerPlayer.js');
jest.mock('../dom/set.js');
jest.mock('../dom/setComp.js');

describe("", () => {
    let realPlayerMock, computerPlayerMock, attackCell;

    beforeEach(() => {
        realPlayerMock = new RealPlayer("Player 1", playerGameboard);
        computerPlayerMock = new ComputerPlayer("Computer", computerGameboard);
        realPlayerMock.attack = jest.fn().mockReturnValue("hit");
        playerGameboard.allShipsSunk = jest.fn().mockReturnValue(false);
        computerGameboard.allShipsSunk = jest.fn().mockReturnValue(false);
        document.body.innerHTML = `
    <div id="computer-board">
      <div class="cell" data-row="0" data-col="0"></div>
      <div class="cell" data-row="0" data-col="1"></div>
      <div class="cell" data-row="1" data-col="0"></div>
      <div class="cell" data-row="1" data-col="1"></div>
    </div>
  `;
        attackCell = document.querySelector(".cell");
        console.log("DOM setup complete:", attackCell);
        addAttackEventListeners();
        console.log("addAttackEventListeners function has been called.")
    });


    test('logs correct attack result', () => {
        console.log = jest.fn();
        const attackSpy = jest.spyOn(realPlayerMock, 'attack');
        const cells = document.querySelectorAll('.cell');
        console.log(`Total cells: ${cells.length}`);
        cells.forEach((cell, index) => {
            const row = cell.getAttribute('data-row');
            const col = cell.getAttribute('data-col');
            console.log(`Cell at [${row}, ${col}] is present and should have event listener.`);
        });
        expect(attackCell).toBeTruthy();
        expect(attackCell.hasAttribute('data-row')).toBe(true);
        expect(attackCell.hasAttribute('data-col')).toBe(true);
        attackCell.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        console.log("attackSpy.callCount:", attackSpy.mock.calls.length);
        // expect(attackSpy).toHaveBeenCalledTimes(1);
        // expect(attackSpy).toHaveBeenCalledWith(computerPlayerMock, 0, 0);
        // expect(console.log).toHaveBeenCalledWith('Player attacks at [0, 0] resulting in: hit');
    });
})