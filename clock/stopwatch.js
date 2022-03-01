function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

// Stopwatch code
let startTime;
let currTime;
let pauseTime = 0;
let timer;
let flag = false;

let stopWatch = document.getElementById("stopwatch")
function startFunc() {
    startTime = Date.now();
    timer = setInterval(timerFunc, 1000);
    flag = true;
}
  
function stopFunc() {
    clearInterval(timer);
    pauseTime = 0;
    stopWatch.innerHTML = "00:00:00";
    flag = false;
}

function pauseFunc() {
    clearInterval(timer);
    if(flag) {
      currTime = Date.now();
      pauseTime += currTime - startTime;
    }
}

function timerFunc() {
    currTime = Date.now();
    let elapsedTime = Math.round((pauseTime + currTime - startTime)/ 1000);
    let h = addZero(Math.floor(elapsedTime / 3600));
    let m = addZero(Math.floor((elapsedTime - (h * 3600)) /60 ));
    let s = addZero(Math.floor(elapsedTime - (h * 3600) - (m * 60))); 
    stopWatch.innerHTML = `${h}:${m}:${s}`;
}
