import "./styles.css";
import { createGameboardElement } from "./dom/createGameboardElement.js";
import { displayShipsNearBoard } from "./dom/displayShipsNearBoard.js";
import { placeComputerShips } from "./dom/placeComputerShips.js";
import { computerGameboard } from "./dom/setComp.js";
import { playerGameboard } from "./dom/set.js";
import { addAttackEventListeners } from "./addAttackEventListeners.js";
import { initializeEventListeners } from "./dom/orientation.js";
createGameboardElement('player1-board');
createGameboardElement('computer-board', true);
placeComputerShips();
displayShipsNearBoard();
addAttackEventListeners();
initializeEventListeners()
console.log(playerGameboard);
console.log(computerGameboard);