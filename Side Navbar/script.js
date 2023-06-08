// Get the navbar element and all anchor tags within it
const navbar = document.querySelector(".navbar");
const links = navbar.querySelectorAll("a");

// Add a click event listener to each anchor tag
links.forEach(link => {
  link.addEventListener("click", () => {

    // Remove the "active" class from all anchor tags
    links.forEach(link => link.classList.remove("active"));

    // Add the "active" class to the clicked anchor tag
    link.classList.add("active");
  });
});
