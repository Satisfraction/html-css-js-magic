function toggleMobileMenu() {
    const menu = document.querySelector('.navigation ul');
    menu.classList.toggle('open');
}

function highlightCurrentPageLink() {
    const links = document.querySelectorAll('.navigation ul li a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
        behavior: 'smooth'
    });
}

