// DOM elements
const popup = document.querySelector('.popup');
const notification = document.querySelector('.notification');
const breakAlert = document.querySelector('.break-alert');
const dismissBtn = document.querySelector('.dismiss-btn');
const startBreakBtn = document.querySelector('.start-break-btn');
const hydrationSlider = document.getElementById('hydration-interval');
const breakSlider = document.getElementById('break-interval');
const hydrationValue = document.getElementById('hydration-value');
const breakValue = document.getElementById('break-value');
const pauseBtn = document.querySelector('.pause-btn');
const snoozeBtn = document.querySelector('.snooze-btn');
// Variables to track the reminder state
let hydrationReminderInterval;
let breakReminderInterval;
let isPaused = false;

// Show hydration reminder
function showHydrationReminder() {
  popup.style.display = 'block';
  notification.style.display = 'block';
}

// Show break alert
function showBreakAlert() {
  popup.style.display = 'block';
  breakAlert.style.display = 'block';
}

// Hide popup and reminders
function hidePopup() {
  popup.style.display = 'none';
  notification.style.display = 'none';
  breakAlert.style.display = 'none';
}

// Update hydration interval
hydrationSlider.addEventListener('input', function () {
  const hydrationInterval = hydrationSlider.value;
  hydrationValue.textContent = hydrationInterval;
});

// Update break interval
breakSlider.addEventListener('input', function () {
  const breakInterval = breakSlider.value;
  breakValue.textContent = breakInterval;
});

// Pause reminders
pauseBtn.addEventListener('click', function () {
  // Implement logic to pause reminders for the selected time
});

// Snooze reminders
snoozeBtn.addEventListener('click', function () {
  // Implement logic to snooze reminders for the selected time
});

// Simulate hydration reminder (example)
function simulateHydrationReminder() {
  //   showHydrationReminder();
  //   setTimeout(hidePopup, 5000); // Close popup after 5 seconds (example)
  if (!isPaused) {
    showHydrationReminder();
    hydrationReminderInterval = setTimeout(hidePopup, 5000); // Close popup after 5 seconds (example)
  }
}

// Simulate break alert (example)
function simulateBreakAlert() {
  //   showBreakAlert();
  //   setTimeout(hidePopup, 5000); // Close popup after 5 seconds (example)
  if (!isPaused) {
    showBreakAlert();
    breakReminderInterval = setTimeout(hidePopup, 5000); // Close popup after 5 seconds (example)
  }
}

// Function to pause reminders
function playPauseReminders() {
  if (!isPaused) {
    clearInterval(hydrationReminderInterval);
    clearInterval(breakReminderInterval);
    isPaused = true;
    pauseBtn.textContent = 'Play';
  } else {
    isPaused = false;
    pauseBtn.textContent = 'Pause';
    simulateHydrationReminder(); // Resume hydration reminder
    simulateBreakAlert(); // Resume break alert
  }
}

// // Function to play (resume) reminders
// function playReminders() {
//   if (isPaused) {
//     isPaused = false;
//     pauseBtn.textContent = 'Pause';
//     simulateHydrationReminder(); // Resume hydration reminder
//     simulateBreakAlert(); // Resume break alert
//   }
// }

// Event listeners for "Pause" and "Play" buttons
pauseBtn.addEventListener('click', playPauseReminders);
dismissBtn.addEventListener('click', playPauseReminders);
// playBtn.addEventListener('click', playReminders);

// Example: Simulate hydration and break alerts for demonstration purposes
// Replace these examples with your actual logic to trigger reminders as needed
setInterval(simulateHydrationReminder, 15000); // Every 15 seconds (example)
setInterval(simulateBreakAlert, 30000); // Every 30 seconds (example)
