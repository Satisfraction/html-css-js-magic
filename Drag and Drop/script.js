// Get all the elements with the class ".box" and store them in a NodeList called "boxes"
const boxes = document.querySelectorAll('.box');

// Get all the elements with the class ".image" and store them in a NodeList called "Image"
Image = document.querySelectorAll('.image');

// For each of the elements in the "boxes" NodeList, add two event listeners
boxes.forEach(box => {
    // Add an event listener for when an element is being dragged over a box. 
    // The event passed to the listener is "e". Prevent the default behavior of the event.
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    // Add an event listener for when an element is dropped on a box.
    // When this event happens, append the first element in the "Image" NodeList to the box.
    box.addEventListener("drop", () => {
        box.appendChild(Image[0]);
    })
})