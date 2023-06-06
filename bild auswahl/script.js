// Select the image element in the DOM and assign it to the image constant
const image = document.querySelector('img');

// Select the input element in the DOM and assign it to the input variable
input = document.querySelector('input');

// Add an event listener to the input element that listens for a 'change' event and runs a callback function
input.addEventListener('change', () => {
    // Set the src attribute of the image element to a URL created from the first file selected by the user in the input element 
    image.src = URL.createObjectURL(input.files[0]);
});
