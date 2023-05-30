// Add active class to clicked element
const navbar = document.querySelector(".navbar");
const links = navbar.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});
