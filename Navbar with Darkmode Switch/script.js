// Get the switch toggle element from the DOM
const switchToggle = document.getElementById("switch");

// Get the body element from the DOM
const body = document.body;

// Add an event listener to the switch toggle element
switchToggle.addEventListener("change", () => {

  // Check if the switch toggle element is checked
  if (switchToggle.checked) {

    // Add the dark-mode class to the body element if the switch toggle is checked
    body.classList.add("dark-mode");

  } else {

    // Remove the dark-mode class from the body element if the switch toggle is not checked
    body.classList.remove("dark-mode");

  }
});
