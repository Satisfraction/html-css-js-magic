const btn = document.querySelector("button");
const inputText = document.querySelector("textarea");

btn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(inputText.value);
    speechSynthesis.speak(utterance);
})