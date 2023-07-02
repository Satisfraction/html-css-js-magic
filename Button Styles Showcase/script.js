
// Function for Button 1
document.getElementById("button1").addEventListener("click", function () {
    alert("Button 1 was clicked!"); 
});

// Function for Button 2
document.getElementById("button2").addEventListener("click", function () {
    console.log("Button 2 was clicked!");
});

// Function for Button 3
document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("button3").style.backgroundColor = "red";
});

// Function for Button 4
document.getElementById("button4").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Function for Button 5
document.getElementById("button5").addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
});

// Function for Button 6
document.getElementById("button6").addEventListener("click", function () {
    window.location.href = "https://www.example.com";
});

// Function for Button 7
document.getElementById("button7").addEventListener("click", function () {
    let newButton = document.createElement("button");
    newButton.textContent = "New Button";
    document.body.appendChild(newButton);
});

// Function for Button 8
document.getElementById("button8").addEventListener("click", function () {
    alert("Button 8 does nothing!");
});

// Function for Button 9
document.getElementById("button9").addEventListener("click", function () {
    let buttonText = document.getElementById("button9").textContent;
    console.log(`Button 9 text: ${buttonText}`);
});

// Function for Button 10
document.getElementById("button10").addEventListener("click", function () {
    document.body.innerHTML = "<h1>All buttons were clicked!</h1>";
});
