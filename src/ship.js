export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.coordinates = [];

    }

    hit() {
        this.hits += 1;
        this.isSunk();

    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;

        }
        else this.sunk = false;
        return this.sunk;  // Return whether the ship is sunk
    }
}
