import { currentOrientation, updateOrientation, initializeEventListeners } from "../dom/orientation.js";

describe("updateOrientation function with event listeners", () => {
    let horizontalElement, verticalElement;

    beforeAll(() => {
        document.body.innerHTML = `<div id="horizontal"></div><div id="vertical"></div>`;
        horizontalElement = document.getElementById("horizontal");
        verticalElement = document.getElementById("vertical");
        expect(horizontalElement).not.toBeNull();
        expect(verticalElement).not.toBeNull();
        initializeEventListeners();
        horizontalElement.style.backgroundColor = "white";
        verticalElement.style.backgroundColor = "white";
    });

    test("should update currentOrientation and change background color to green for vertical orientation", () => {
        verticalElement.click();
        expect(currentOrientation).toBe("vertical");
        expect(verticalElement.style.backgroundColor).toBe("green");
        expect(horizontalElement.style.backgroundColor).toBe("white");
    });

    test("should update currentOrientation and change background color to green for horizontal orientation", () => {
        horizontalElement.click();
        expect(currentOrientation).toBe("horizontal");
        expect(horizontalElement.style.backgroundColor).toBe("green");
        expect(verticalElement.style.backgroundColor).toBe("white");
    });

    test("should handle multiple updates correctly", () => {
        horizontalElement.click();
        expect(currentOrientation).toBe("horizontal");
        expect(horizontalElement.style.backgroundColor).toBe("green");
        expect(verticalElement.style.backgroundColor).toBe("white");

        verticalElement.click();
        expect(currentOrientation).toBe("vertical");
        expect(horizontalElement.style.backgroundColor).toBe("white");
        expect(verticalElement.style.backgroundColor).toBe("green");
    });
})