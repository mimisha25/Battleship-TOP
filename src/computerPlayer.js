import { Player } from "./player";

const message = document.querySelector("#message");

export class ComputerPlayer extends Player {
    constructor(name, gameboard) {
        super(name, gameboard);
    }
}