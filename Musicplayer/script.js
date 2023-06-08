// get audio element
const audio = document.getElementById('audio');

// get play button element
const playBtn = document.getElementById('play');

// get pause button element
const pauseBtn = document.getElementById('pause');

// get volume slider element
const volumeSlider = document.getElementById('volume');

// get file input element
const fileInput = document.getElementById('file-input');

// set initial volume to 50%
audio.volume = 0.5;

// add click event listener to play button
playBtn.addEventListener('click', () => {
    // play audio
    audio.play();
});

// add click event listener to pause button
pauseBtn.addEventListener('click', () => {
    // pause audio
    audio.pause();
});

// add input event listener to volume slider
volumeSlider.addEventListener('input', () => {
    // set audio volume to slider value
    audio.volume = volumeSlider.value / 100;
});

// add change event listener to file input
fileInput.addEventListener('change', () => {
    // get selected file
    const file = fileInput.files[0];

    // create URL for selected file
    const fileUrl = URL.createObjectURL(file);

    // set audio source to selected file URL
    audio.src = fileUrl;

    // play audio
    audio.play();
});
