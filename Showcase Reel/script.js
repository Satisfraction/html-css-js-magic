// Get the showcase element and all the images within it
const showcase = document.querySelector('#showcase');
const images = showcase.querySelectorAll('img');

// Get the previous and next buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// Set the initial image index to 0
let currentImageIndex = 0;

// Define a function to show a specific image by its index
function showImage(index) {
  // Hide the current image
  images[currentImageIndex].classList.add('hidden');
  // Show the new image
  images[index].classList.remove('hidden');
  // Update the current image index
  currentImageIndex = index;
}

// Define a function to show the next image
function showNextImage() {
  // Calculate the index of the next image
  const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  // Show the next image
  showImage(nextIndex);
}

// Define a function to show the previous image
function showPrevImage() {
  // Calculate the index of the previous image
  const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  // Show the previous image
  showImage(prevIndex);
}

// Show the initial image
showImage(currentImageIndex);

// Attach event listeners to the previous and next buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
