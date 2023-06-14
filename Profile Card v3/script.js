// Select the toggle button element
const toggleBtn = document.querySelector('.toggle-btn');
// Select the About Me section element
const aboutMe = document.querySelector('.about-me');

// Add an event listener to the toggle button that triggers when clicked
toggleBtn.addEventListener('click', () => {
  // If the display style of the About Me section is 'none'
  if (aboutMe.style.display === 'none') {
    // Change the display style of the About Me section to 'block'
    aboutMe.style.display = 'block';
    // Change the text content of the toggle button to 'Hide About Me'
    toggleBtn.textContent = 'Hide About Me';
  } else { // Otherwise
    // Change the display style of the About Me section to 'none'
    aboutMe.style.display = 'none';
    // Change the text content of the toggle button to 'Show About Me'
    toggleBtn.textContent = 'Show About Me';
  }
});
