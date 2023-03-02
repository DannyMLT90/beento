const flightRecords = document.getElementById('flight-records');
const addFlightForm = document.getElementById('add-flight-form');

// Call updateFlightRecords when page loads to display initial data
window.onload = updateFlightRecords;

// Make AJAX request to backend.php and update flightRecords with returned data
function updateFlightRecords() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      flightRecords.innerHTML = this.responseText;
      addDeleteButtonListener();
    }
  };
  xhr.open("GET", "backend.php", true);
  xhr.send();
}

  // Add event listener to the back button
  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', (event) => {
    window.location.href = "input.html";
  });

// Add event listener to the form to make an AJAX request when submitted
addFlightForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const formData = new FormData(addFlightForm);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      updateFlightRecords(); // Update flightRecords with new data after successful submission
      addFlightForm.reset(); // Reset form after successful submission
    }
  };
  xhr.open("POST", "backend.php", true);
  xhr.send(formData);
});

// Add click listener to the delete buttons to delete a flight record
function addDeleteButtonListener() {
  const deleteButtons = document.querySelectorAll("#flight-records a[data-id]");
  for (const button of deleteButtons) {
    button.addEventListener("click", (event) => {
      const id = button.getAttribute("data-id");
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          updateFlightRecords(); // Update flightRecords with new data after successful deletion
        }
      };
      xhr.open("GET", `backend.php?delete_id=${id}`, true);
      xhr.send();
      event.preventDefault(); // Prevent the link from redirecting to backend.php
    });
  }
}
