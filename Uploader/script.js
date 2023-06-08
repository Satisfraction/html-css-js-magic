// Get DOM elements
const fileInput = document.getElementById('file-input');
const fileName = document.getElementById('file-name');
const uploadButton = document.getElementById('upload-button');
const uploadProgress = document.getElementById('upload-progress');

// Add event listener to file input field
fileInput.addEventListener('change', () => {
  // If a file has been selected
  if (fileInput.value) {
    // Get the file name from the file path and update the file name display
    const name = fileInput.value.split('\\').pop();
    fileName.textContent = name;
    // Enable the upload button
    uploadButton.removeAttribute('disabled');
  } else {
    // If no file has been selected, clear the file name display and disable the upload button
    fileName.textContent = '';
    uploadButton.setAttribute('disabled', true);
  }
});

// Add event listener to upload button
uploadButton.addEventListener('click', () => {
  // Get the selected file
  const file = fileInput.files[0];
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // Set up the request
  xhr.open('POST', '/upload');
  // Add event listener to track upload progress
  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      // Calculate and update the upload progress percentage
      const percentComplete = (event.loaded / event.total) * 100;
      uploadProgress.value = percentComplete;
    }
  }, false);
  // Add event listener to update the upload progress bar when upload is complete
  xhr.addEventListener('load', () => {
    uploadProgress.value = 100;
  });
  // Send the selected file to the server
  xhr.send(file);
});
