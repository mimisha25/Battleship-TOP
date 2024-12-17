import { setPlayerShips } from "./set.js";
export function afterDrop(playerShips) {
    if (playerShips.length === 5) {
        const h3 = document.querySelector("#ships-container h3");
        document.querySelector("#ships-container").removeChild(h3);
        const ver = document.querySelector("#horizontal");
        const hor = document.querySelector("#vertical");
        document.querySelector("#ships-container").removeChild(hor);
        document.querySelector("#ships-container").removeChild(ver);
        document.querySelector("#message").textContent = "Now start attack the computer's board";
        setPlayerShips(playerShips);
    }
}