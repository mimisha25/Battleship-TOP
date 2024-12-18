import { Gameboard } from "../gameboard.js";
import { Ship } from "../ship.js";
export const computerGameboard = new Gameboard("computer-board", true);
export function setComputerShips(computerShips) {
    computerShips = computerShips.map(ship => {
        const shipInstance = new Ship(ship.size);
        ship.coordinates.forEach(coord => {
            shipInstance.coordinates = shipInstance.coordinates || [];
            shipInstance.coordinates.push(coord);
        });
        return shipInstance;
    })
    console.log(computerShips);
    computerGameboard.setShips(computerShips);
}