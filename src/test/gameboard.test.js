import { Ship } from '../ship';
import { Gameboard } from '../gameboard';

describe("Gameboard Class", () => {
    let gameboard;
    let ship1;
    let ship2;

    beforeEach(() => {
        gameboard = new Gameboard("player 1");
        ship1 = new Ship(3);
        ship1.coordinates = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }];
        ship2 = new Ship(2);
        ship2.coordinates = [{ row: 1, col: 0 }, { row: 1, col: 1 }];
    });

    test("should initlize a 10x10 gameboard", () => {
        expect(gameboard.board.length).toBe(10);
        expect(gameboard.board[0].length).toBe(10);
        expect(gameboard.board[0][0]).toHaveProperty("hit", false);
        expect(gameboard.board[0][0]).toHaveProperty("ship", null);
    });

    test("should place ships on the board", () => {
        gameboard.setShips([ship1, ship2]);
        expect(gameboard.board[0][0].ship).toBe(ship1);
        expect(gameboard.board[0][1].ship).toBe(ship1);
        expect(gameboard.board[0][2].ship).toBe(ship1);
        expect(gameboard.board[1][0].ship).toBe(ship2);
        expect(gameboard.board[1][1].ship).toBe(ship2);
    });

    test("should register a hit on the ship", () => {
        gameboard.setShips([ship1]);
        const result = gameboard.receiveAttack(0, 0);
        expect(result).toBe("hit");
        expect(ship1.hits).toBe(1);
    });

    test("should register a miss", () => {
        gameboard.setShips([ship1]);
        const result = gameboard.receiveAttack(5, 5);
        expect(result).toBe("miss");
        expect(gameboard.missedAttacks).toContainEqual([5, 5]);
    });

    test("should sink a ship when it receives enough hits", () => {
        gameboard.setShips([ship1]);
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 1);
        gameboard.receiveAttack(0, 2);
        expect(ship1.isSunk()).toBe(true);
    });

    test("should correctly check if all ships are sunk", () => {
        gameboard.setShips([ship1, ship2]);
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 1);
        gameboard.receiveAttack(0, 2);
        gameboard.receiveAttack(1, 0);
        gameboard.receiveAttack(1, 1);
        expect(gameboard.allShipsSunk()).toBe(true);
    });

    test("should return null for a rebundant attack on the same cell", () => {
        gameboard.setShips([ship1]);
        gameboard.receiveAttack(0, 0);
        const result = gameboard.receiveAttack(0, 0);
        expect(result).toBeNull();
    })
})