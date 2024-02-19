const timeDisplay = document.getElementById("time");
const startTimerButton = document.getElementById("startTimer");
const stopTimerButton = document.getElementById("stopTimer");
const resetTimerButton = document.getElementById("resetTimer");
const startStopwatchButton = document.getElementById("startStopwatch");
const stopStopwatchButton = document.getElementById("stopStopwatch");
const resetStopwatchButton = document.getElementById("resetStopwatch");

let timerInterval;
let stopwatchInterval;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateTimer() {
    timerSeconds--;
    if (timerSeconds >= 0) {
        timeDisplay.textContent = formatTime(timerSeconds);
    } else {
        clearInterval(timerInterval);
        timeDisplay.textContent = "Time's up!";
    }
}

function updateStopwatch() {
    stopwatchSeconds++;
    timeDisplay.textContent = formatTime(stopwatchSeconds);
}

startTimerButton.addEventListener("click", () => {
    const inputTime = prompt("Enter the countdown time (in seconds):");
    if (!isNaN(inputTime) && inputTime > 0) {
        timerSeconds = parseInt(inputTime);
        timeDisplay.textContent = formatTime(timerSeconds);
        timerInterval = setInterval(updateTimer, 1000);
    }
});

stopTimerButton.addEventListener("click", () => {
    clearInterval(timerInterval);
});

resetTimerButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerSeconds = 0;
    timeDisplay.textContent = formatTime(timerSeconds);
});

startStopwatchButton.addEventListener("click", () => {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
});

stopStopwatchButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
});

resetStopwatchButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    timeDisplay.textContent = formatTime(stopwatchSeconds);
});


function updateClock() {
    const clock = document.querySelector(".clock");
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours - 3) * 30 + minutes * 0.5;
    const minuteDegrees = (minutes - 15) * 6 + seconds * 0.1;
    const secondDegrees = (seconds - 15) * 6;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize the clock immediately
