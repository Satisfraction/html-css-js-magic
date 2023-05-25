const boxes = document.querySelectorAll('.box');
Image = document.querySelectorAll('.image');

boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    box.addEventListener("drop", () => {
        box.appendChild(Image[0]);
    })
})