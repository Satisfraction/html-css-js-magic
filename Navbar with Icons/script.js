// This function toggles the mobile menu by adding or removing the 'open' class from the menu.
function toggleMobileMenu() {
    const menu = document.querySelector('.navigation ul');        // Selects the menu
    menu.classList.toggle('open');        // Toggles the 'open' class
}

// This function toggles the mobile menu when the user clicks on the menu icon.
function highlightCurrentPageLink() {
    const links = document.querySelectorAll('.navigation ul li a'); // Selects all the links
    const currentUrl = window.location.href;    // Gets the current URL

    // Iterates over the links
    links.forEach(link => {
        if (link.href === currentUrl) {    // If the link is the current URL
            link.classList.add('active');    // Add the 'active' class
        } else {
            link.classList.remove('active');    // Remove the 'active' class
        }
    });
}

// This function scrolls to the section when the user clicks on a link.
function scrollToSection(event) {
    event.preventDefault();    // Prevents the default action
    const sectionId = event.target.getAttribute('href');    // Gets the section ID
    const section = document.querySelector(sectionId);    // Selects the section

    // Scrolls to the section
    section.scrollIntoView({
        behavior: 'smooth'    // Smooth scrolling
    });
}
