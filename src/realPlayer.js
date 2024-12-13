import { Player } from "./player";

const message = document.querySelector("#message");

export class RealPlayer extends Player {
    constructor(name, gameboard) {
        super(name, gameboard);
    }
}