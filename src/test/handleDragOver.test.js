import { handleDragOver } from "../dom/handleDragOver.js";
describe("handleDragOver", () => {
    let cell, event;

    beforeEach(() => {
        cell = document.createElement("div");
        cell.classList.add("some-class");
        event = { preventDefault: jest.fn() };
    });

    test("should prevent default behavior", () => {
        handleDragOver(event, cell);
        expect(event.preventDefault).toHaveBeenCalled();
    });
})