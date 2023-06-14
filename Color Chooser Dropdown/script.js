// Get the dropdown button element
const dropdownButton = document.querySelector('.dropdown-button');
// Get the dropdown content element
const dropdownContent = document.querySelector('.dropdown-content');
// Get all the color option elements
const colorOptions = document.querySelectorAll('.color-option');

// Add a click event listener to the dropdown button element
dropdownButton.addEventListener('click', () => {
    // Toggle the 'show' class on the dropdown content element
    dropdownContent.classList.toggle('show');
});

// Loop through each color option element
colorOptions.forEach(option => {
    // Add a click event listener to the current color option element
    option.addEventListener('click', () => {
        // Get the color value from the 'data-color' attribute of the current color option element
        const color = option.dataset.color;
        // Set the background color of the body to the current color value
        document.body.style.backgroundColor = color;
        // Set the text color of the body to the contrast color of the current color value
        document.body.style.color = getContrastColor(color);
        // Remove the 'show' class from the dropdown content element
        dropdownContent.classList.remove('show');
    });
});

// Calculate the relative luminance of a given RGB color
function getRelativeLuminance(r, g, b) {
    // Convert the RGB values to sRGB values
    const RsRGB = r / 255;
    const GsRGB = g / 255;
    const BsRGB = b / 255;

    // Calculate the R, G, and B values using the sRGB values
    const R = RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    const G = GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    const B = BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

    // Calculate the relative luminance using the R, G, and B values
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
