export function handleDragOver(event, cell) {
    event.preventDefault();
    cell.classList.add("drop-target");
}