export function handleDragEnd(event) {
    const shipClone = event.target.shipClone;
    if (shipClone) document.body.removeChild(shipClone);
    const ship = event.target.ship;
    if (ship) ship.remove();
    event.target.classList.remove("dragging");
}