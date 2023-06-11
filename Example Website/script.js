// Get the DOM element with the ID "welcome"
const welcome = document.getElementById("welcome");

// Add an event listener that triggers when the mouse is over the "welcome" element
welcome.addEventListener("mouseover", () => {
    // Add the CSS class "jump" to the "welcome" element
    welcome.classList.add("jump");
    // Change the color of the "welcome" element to red
    welcome.style.color = "rgb(255, 0, 0)";
    // Set a timeout function that removes the "jump" class from the "welcome" element and restores its original color after 500ms
    setTimeout(() => {
        welcome.classList.remove("jump");
        welcome.style.color = "";
    }, 500);
});
