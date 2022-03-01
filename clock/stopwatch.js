function addZero(i) {
    let j = i.toString(10)
    if (j.length < 2) {j = "0" + j}
    return j;
  }

let second = 0;
let minute = 0;
let hour = 0;
let timer;
let stopwatch = document.getElementById("stopwatch");

function startFunc() {
    readScreenFunc();
    timer = setInterval(addSecondFunc, 1000);
}
  
function stopFunc() {
    clearInterval(timer);
    countdown.innerHTML = "00:00:00";
}

function pauseFunc() {
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

function print() {
    let stringSecond = addZero(second);
    let stringMinute = addZero(minute);
    let stringHour = addZero(hour);
    stopwatch.innerHTML = `${stringHour}:${stringMinute}:${stringSecond}`;
}

function readScreenFunc(){
    let str = stopwatch.textContent;
    let strlist = str.split(":");
    hour = parseInt(strlist[0]);
    minute = parseInt(strlist[1]);
    second = parseInt(strlist[2]);
}

// Another code work 
// function addZero(i) {
//     if (i < 10) {i = "0" + i}
//     return i;
//   }

// // Stopwatch code
// let startTime;
// let currTime;
// let pauseTime = 0;
// let timer;
// let flag = false;

// let stopWatch = document.getElementById("stopwatch")
// function startFunc() {
//     startTime = Date.now();
//     timer = setInterval(timerFunc, 1000);
//     flag = true;
// }
  
// function stopFunc() {
//     clearInterval(timer);
//     pauseTime = 0;
//     stopWatch.innerHTML = "00:00:00";
//     flag = false;
// }

// function pauseFunc() {
//     clearInterval(timer);
//     if(flag) {
//       currTime = Date.now();
//       pauseTime += currTime - startTime;
//     }
// }

// function timerFunc() {
//     currTime = Date.now();
//     let elapsedTime = Math.round((pauseTime + currTime - startTime)/ 1000);
//     let h = addZero(Math.floor(elapsedTime / 3600));
//     let m = addZero(Math.floor((elapsedTime - (h * 3600)) /60 ));
//     let s = addZero(Math.floor(elapsedTime - (h * 3600) - (m * 60))); 
//     stopWatch.innerHTML = `${h}:${m}:${s}`;
// }
