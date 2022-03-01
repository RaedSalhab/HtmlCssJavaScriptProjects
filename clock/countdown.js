function addZero(i) {
    let j = i.toString(10)
    if (j.length < 2) {j = "0" + j}
    return j;
  }

// Countdown Timer Code
let second = 0;
let minute = 0;
let hour = 0;
let timer;
let countdown = document.getElementById("countdown");

function startTimerFunc() {
    readScreenFunc();
    timer = setInterval(subSecondFunc, 1000);
}
  
function stopTimerFunc() {
    clearInterval(timer);
    countdown.innerHTML = "00:00:00";
}

function pauseTimerFunc() {
    clearInterval(timer);
}

function addSecondFunc() {
    second++;
    if(second >= 60) {
        second -= 60;
        addMinuteFunc();
    }
    print();
}

function addMinuteFunc() {
    minute++;
    if(minute >= 60) {
        minute -= 60;
        addHourFunc();
    }
    print();
}

function addHourFunc() {
    if(hour <= 99) { hour++; }
    print();
}

function subSecondFunc() {
    if(second > 0) {
        second--
    } else if (minute >= 1 || hour >= 1) {
        subMinuteFunc();
        second = 59;
    } 
    print();
}

function subMinuteFunc() {
    if(minute > 0) {
        minute-- 
    } else if (hour >= 1) {
        subHourFunc();
        minute = 59;
    }
    print();
}

function subHourFunc() {
    if(hour > 0) { hour--; } 
    print();
}  


function print() {
    let stringSecond = addZero(second);
    let stringMinute = addZero(minute);
    let stringHour = addZero(hour);
    countdown.innerHTML = `${stringHour}:${stringMinute}:${stringSecond}`;
}

function readScreenFunc(){
    let str = countdown.textContent;
    let strlist = str.split(":");
    hour = parseInt(strlist[0]);
    minute = parseInt(strlist[1]);
    second = parseInt(strlist[2]);
}