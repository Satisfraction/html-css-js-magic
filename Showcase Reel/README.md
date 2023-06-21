# Showcase Reel

This project is a showcase reel that displays a collection of images. It allows users to navigate through the images using the "Prev" and "Next" buttons. The project is implemented using HTML, CSS, and JavaScript.


## Instructions

To use this project, follow the instructions below:

1. Download the project files: `index.html`, `style.css`, and `script.js`.
2. Ensure all the files are saved in the same directory on your local machine.
3. Open the `index.html` file using a web browser.

## HTML Structure

The `index.html` file contains the HTML structure for the project. It consists of the following elements:

- An `<h1>` heading that serves as the title of the showcase reel.
- A `<div>` element with the id "showcase" that holds the images and navigation buttons.
- `<img>` elements representing the images to be displayed in the showcase. Additional images can be added by uncommenting the placeholder line and providing the appropriate image source.
- "Prev" and "Next" buttons with the ids "prev-btn" and "next-btn" respectively, for navigating between the images.

## CSS Styling

The project's appearance is customized using CSS styles defined in the `style.css` file. The styles include:

- Styling for the body, such as font-family, margin, and padding.
- Styling for the heading, including text alignment, margin-top, and font-size.
- Styling for the showcase container, including position, height, and background color.
- Styling for the images within the showcase, including position, alignment, size, object-fit, opacity, and transition effects.
- Styling for the hidden class, which is used to hide images that are not currently displayed.
- Styling for the hover effect on the images.
- Styling for the "Prev" and "Next" buttons, including position, alignment, padding, border, background color, color, font size, and cursor.

## JavaScript Functionality

The project includes JavaScript code in the `script.js` file to provide interactivity. It consists of the following functionality:

- The `showImage()` function is called to display the image at the specified index. It updates the visibility of the current and target images by adding/removing the "hidden" class.
- The `showNextImage()` function is triggered when the "Next" button is clicked. It determines the index of the next image to be displayed and calls the `showImage()` function accordingly.
- The `showPrevImage()` function is triggered when the "Prev" button is clicked. It determines the index of the previous image to be displayed and calls the `showImage()` function accordingly.
- The initial image is displayed by calling the `showImage()` function with the initial index.
- Event listeners are attached to the "Prev" and "Next" buttons, which call the respective functions when clicked.

Feel free to use this project as a starting point for your own development or customize it further to meet your specific requirements. Enjoy exploring and building upon this showcase reel implementation!

## License

This code is released under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.