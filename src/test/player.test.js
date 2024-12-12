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



});
