export function handleDragStart(event, ship) {
    event.dataTransfer.setData("text/plain", ship.dataset.shipSize);
    event.target.classList.add("dragging");
    event.target.ship = ship;
    const shipClone = ship.cloneNode(true);
    shipClone.classList.add("dragging-ship");
    document.body.appendChild(shipClone);
    event.dataTransfer.setDragImage(shipClone, 0, 0);
    event.target.shipClone = shipClone;
}