export class Player {
    constructor(name, gameboard) {
        this.name = name;
        this.gameboard = gameboard;
    }

    attack(opponent, x, y) {
        if (x < 0 || x >= 10 || y < 0 || y >= 10) throw new Error("Coordinates out of bounds!");
        const result = opponent.gameboard.receiveAttack(x, y);
        return result;
    }
}