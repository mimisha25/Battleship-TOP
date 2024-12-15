let currentOrientation = 'horizontal';
function updateOrientation(newOrientation) {
    currentOrientation = newOrientation;
    document.querySelector("#horizontal").style.backgroundColor = "white";
    document.querySelector("#vertical").style.backgroundColor = "white";
    document.querySelector(`#${newOrientation}`).style.backgroundColor = "green";
}

function initializeEventListeners() {
    document.getElementById('horizontal').addEventListener('click', () => updateOrientation('horizontal'));
    document.getElementById('vertical').addEventListener('click', () => updateOrientation('vertical'));
}
export { currentOrientation, updateOrientation, initializeEventListeners }