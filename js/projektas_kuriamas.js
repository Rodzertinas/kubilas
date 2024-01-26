let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
if (localStorage.getItem('isRunning') === 'true') {
    hours = parseInt(localStorage.getItem('hours'));
    minutes = parseInt(localStorage.getItem('minutes'));
    seconds = parseInt(localStorage.getItem('seconds'));
    startStopTimer();
} else {
    updateTime(); 
}


function startStopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null; 
        localStorage.setItem('isRunning', 'false');
    } else {
        if (hours > 0 || minutes > 0 || seconds > 0) {
            timer = setInterval(updateTime, 1000);
            localStorage.setItem('isRunning', 'true');
        }
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

  
    document.getElementById("time").innerHTML =
        formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    localStorage.setItem('hours', hours);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('isRunning', 'true');
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
