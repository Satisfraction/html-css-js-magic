// Select the button element from the DOM and assign it to a variable named "btn"
const btn = document.querySelector("button");

// Select the textarea element from the DOM and assign it to a variable named "inputText"
const inputText = document.querySelector("textarea");

// Add an event listener to the "click" event of the "btn" element
btn.addEventListener("click", () => {
    // Create a new SpeechSynthesisUtterance instance with the value of the "inputText" element as its text
    let utterance = new SpeechSynthesisUtterance(inputText.value);
    // Use the speechSynthesis object to speak the "utterance"
    speechSynthesis.speak(utterance);
})
