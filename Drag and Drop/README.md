# Drag and Drop

This code implements a simple drag and drop functionality using HTML, CSS, and JavaScript. It allows you to drag an image and drop it into a designated box.

## Usage

To use this code, follow the instructions below:

1. Create an HTML file (e.g., `index.html`).
2. Create a CSS file (e.g., `style.css`) and link it to the HTML file using the `<link>` tag.
3. Copy the HTML code and paste it into the HTML file.
4. Copy the CSS code and paste it into the CSS file.
5. Customize the image URL in the CSS code (replace `'https://source.unsplash.com/random'` with your desired image URL).
6. Save the changes.
7. Open the HTML file in a web browser.

## How It Works

- The code defines two boxes using `<div>` elements with the class `box`.
- Inside the first box, there is a child `<div>` element with the class `image` and the `draggable="true"` attribute.
- The CSS styles define the appearance of the boxes and the image.
- The JavaScript code adds event listeners to each box.
  - The `dragover` event listener prevents the default behavior of the browser when dragging over the box.
  - The `drop` event listener appends the dragged image (`Image[0]`) to the box.

Feel free to modify the code to suit your specific needs.

## License

This code is released under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
