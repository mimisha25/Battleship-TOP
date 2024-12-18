import { Ship } from "../ship.js";
import { Gameboard } from "../gameboard.js";

export function setPlayerShips(playerShips) {
    playerShips = playerShips.map(ship => {
        const shipInstance = new Ship(ship.size);
        ship.coordinates.forEach(coord => shipInstance.coordinates.push(coord));
        return shipInstance;
    });
    console.log(playerShips);
    playerGameboard.setShips(playerShips);
}