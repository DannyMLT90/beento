
const flightRecords = document.getElementById('flight-records'); // Get the element with ID "flight-records" and store it in a variable
const addFlightButton = document.getElementById('add-flight-button'); // Get the element with ID "add-flight-button" and store it in a variable
const addFlightModal = document.getElementById('add-flight-modal');// Get the element with ID "add-flight-modal" and store it in a variable
const closeSpan = document.getElementsByClassName('close')[0]; // Get the first element with class "close" and store it in a variable

// Define openInput function in global scope
function openInput() {
  window.location.href = "backend.html";
}

window.onload = function() {


  // Make AJAX request to backend.php
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Display returned data in #flight-records div
      flightRecords.innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "backend.php", true);
  xhr.send();

  // Add click event listener to "add-flight-button"
  addFlightButton.addEventListener('click', () => {
    addFlightModal.style.display = 'block';
  });

  // Add click event listener to "close" span
  closeSpan.addEventListener('click', () => {
    addFlightModal.style.display = 'none';
  });

  // Add click event listener to window
  window.addEventListener('click', (event) => {
    if (event.target == addFlightModal) {
      addFlightModal.style.display = 'none';
    }
  });
}
