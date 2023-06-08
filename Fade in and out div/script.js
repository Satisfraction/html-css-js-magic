// Get the HTML element with the ID "box" and assign it to a variable named "box"
const box = document.getElementById('box');
        // Get the HTML element with the ID "input" and assign it to a variable named "input"
        const input = document.getElementById('input');

        // Add an event listener to the "click" event for the "input" element
        input.addEventListener('click', () => {
            // Add the CSS class "fade-in" to the "box" element
            box.classList.add('fade-in');
            // Set a timeout to remove the "fade-in" class from the "box" element after 1000 milliseconds (1 second)
            setTimeout(() => {
                box.classList.remove('fade-in');
            }, 1000);
        });