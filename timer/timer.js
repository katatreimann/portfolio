// Function to format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

let timer;
let timerRunning = false;

// Start button click event handler
document.getElementById('start-button').addEventListener('click', function () {
    if (!timerRunning) {
        const inputTime = parseInt(document.getElementById('time-input').value, 10);

        if (!isNaN(inputTime) && inputTime > 0) {
            let timeLeft = inputTime;
            timerRunning = true;
            document.getElementById('time-input').disabled = true;

            timer = setInterval(function () {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    timerRunning = false;
                    document.getElementById('time-input').disabled = false;
                    document.getElementById('notification-sound').play();
                } else {
                    document.getElementById('timer-display').textContent = formatTime(timeLeft);
                    timeLeft--;
                }
            }, 1000);
        } else {
            alert('Please enter a valid positive number of seconds.');
        }
    }
});
