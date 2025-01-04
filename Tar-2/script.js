// tar-2

let countdown = 10; // Starting time in seconds
const timerElement = document.getElementById('timer');

function updateTimer() {
    if (countdown > 0) {
        timerElement.textContent = countdown;
        countdown--;
        setTimeout(updateTimer, 1000);
    } else {
        timerElement.textContent = "הזמן נגמר";
    }
}

updateTimer();