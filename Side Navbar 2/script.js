// Select all the anchor elements inside the element with class "sidenav"
const links = document.querySelectorAll(".sidenav a");

// For each link, add event listeners for "mouseover" and "mouseout" events
links.forEach(link => {
  // Add a class "cool-effect" when the mouse is over the link
  link.addEventListener("mouseover", () => {
    link.classList.add("cool-effect");
  });

  // Remove the class "cool-effect" when the mouse goes out of the link
  link.addEventListener("mouseout", () => {
    link.classList.remove("cool-effect");
  });
});
