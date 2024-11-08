// Initialize variables
var hours = 0;
var minutes = 0;
var seconds = 0;
var timer; // To hold the setInterval reference

// Function to start the timer
function startTimer() {
  // Avoid starting multiple intervals
  if (!timer) {
    timer = setInterval(updateDisplay, 1000); // Update display every second
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  timer = null; // Reset the interval reference
}

// Function to reset the timer
function resetTimer() {
  stopTimer(); // Stop the timer first
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay(); // Reset the display to 00:00:00
}

// Function to update the display
function updateDisplay() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  // Format time with leading zeros
  var display = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById('display').textContent = display;
}
