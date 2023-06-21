# Product Card

This project is a simple product card that showcases a product along with its details. It also includes a modal that appears when the product is added to the cart. The project is implemented using HTML, CSS, and JavaScript.

## Instructions

To use this project, follow the instructions below:

1. Download the project files: `index.html`, `style.css`, and `script.js`.
2. Ensure all the files are saved in the same directory on your local machine.
3. Open the `index.html` file using a web browser.

## HTML Structure

The `index.html` file contains the HTML structure for the project. It consists of the following elements:

- A container `<div>` that holds the product card and the modal.
- The product card, represented by a `<div>` element with relevant information such as the product image, name, description, price, and an "Add to Cart" button.
- The modal, which appears when the "Add to Cart" button is clicked. It displays a confirmation message indicating that the product has been added to the cart.

## CSS Styling

The project's appearance is customized using CSS styles defined in the `style.css` file. The styles include:

- Styling for the container that centers the card on the screen both vertically and horizontally.
- Styles for the product card, including background color, width, border, border radius, padding, and box shadow.
- Styling for the product image, heading, description, price, and "Add to Cart" button within the card.
- CSS styles for the modal, including its position, size, background color, and border.
- Styles for the modal content box, close button, and their hover/focus effects.

## JavaScript Functionality

The project includes JavaScript code in the `script.js` file to provide interactivity. It consists of the following functionality:

- The `addToCart()` function is called when the "Add to Cart" button is clicked. It shows the modal by changing its display property to "block".
- The modal is hidden after 3 seconds using a timeout function.
- The close button within the modal has an event listener attached to it. When clicked, it hides the modal by changing its display property to "none".

Feel free to use this project as a starting point for your own development or customize it further to meet your specific requirements. Enjoy exploring and building upon this product card implementation!


## License

This code is released under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.