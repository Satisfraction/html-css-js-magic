# Gray to Color Hover Picture

This code demonstrates a fade-in effect on a box element when a user clicks on an input field. The box starts with an initial opacity of 0 and gradually fades in to full visibility over a specified duration.

## Usage

To use this code, follow the instructions below:

1. Create an HTML file (e.g., `index.html`).
2. Create a CSS file (e.g., `style.css`) and link it to the HTML file using the `<link>` tag.
3. Copy the HTML code and paste it into the HTML file.
4. Copy the CSS code and paste it into the CSS file.
5. Save the changes.
6. Open the HTML file in a web browser.

## How It Works

- The code defines a `<div>` element with the ID `box`, which represents the box to be faded in.
- It also includes an `<input>` element with the ID `input`, which triggers the fade-in effect when clicked.
- The CSS styles define the appearance of the box and the fade-in transition.
- The JavaScript code adds an event listener to the `click` event of the `input` element.
  - When the `input` element is clicked, the `fade-in` CSS class is added to the `box` element.
  - After a 1-second delay (1000 milliseconds), the `fade-in` class is removed from the `box` element, causing it to fade out gradually.

Feel free to modify the code to suit your specific needs.

## License

This code is released under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
