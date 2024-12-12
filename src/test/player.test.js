import { Player } from "../player";
import { Gameboard } from "../gameboard";

describe('Player class', () => {
    let player1, player2, gameboard1, gameboard2;

    beforeEach(() => {
        // Set up gameboards and players
        gameboard1 = new Gameboard(1);
        gameboard2 = new Gameboard(2);
        player1 = new Player('Player 1', gameboard1);
        player2 = new Player('Player 2', gameboard2);
    });

    test('should create a player with a name and a gameboard', () => {
        expect(player1.name).toBe('Player 1');
        expect(player1.gameboard).toBe(gameboard1);
    });

    test("should allow a player to attack an opponent", () => {
        const mockShip = {
            hit: jest.fn(),
            isSunk: jest.fn().mockReturnValue(false)
        };
        gameboard2.setShips([{ coordinates: [{ row: 0, col: 0 }] }]);
        gameboard2.board[0][0].ship = mockShip;
        const attackResult = player1.attack(player2, 0, 0);
        expect(attackResult).toBe("hit");
        expect(mockShip.hit).toHaveBeenCalled();
        expect(gameboard2.board[0][0].hit).toBe(true);
    });

    test("should return miss if attacking an empty cell", () => {
        gameboard2.setShips([]);
        const attackResult = player1.attack(player2, 0, 0);
        expect(attackResult).toBe("miss");
        expect(gameboard2.missedAttacks).toContainEqual([0, 0]);
    })

});
