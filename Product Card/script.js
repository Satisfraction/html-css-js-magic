// Define a function called addToCart
function addToCart() {
  // Show the modal by getting the element with id "myModal"
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Hide the modal after 3 seconds by setting a timeout
  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}

// When the user clicks on the close button, close the modal
// Get the first element with class "close"
var span = document.getElementsByClassName("close")[0];
// Add an onclick event listener to the span element
span.onclick = function() {
  // Get the modal and hide it
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
