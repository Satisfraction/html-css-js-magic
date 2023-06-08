// Get the reference to the image element with the ID "img"
let img = document.getElementById("img");

// Get the reference to the input element with the ID "input"
let input = document.getElementById("input");

// Add an event listener to the input element, which listens for a change event
input.onchange = (e) => {
    // Check if any file is selected
    if (input.files[0]) {
        // Set the source of the image element to the URL of the selected file
        img.src = URL.createObjectURL(input.files[0]);
    }
}