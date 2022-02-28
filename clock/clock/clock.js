let startTime
let currTime
let pauseTime
let timer
let save = true;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function currentTime() {
    let cTime = new Date;
    let hour = addZero(cTime.getHours());
    let minute = addZero(cTime.getMinutes());
    let second = addZero(cTime.getSeconds());

    document.getElementById("clock").innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(currentTime, 1000);

let stopWatch = document.getElementById("stopWatch")
function startFunc() {
    console.log(save);
    if(save) {
        startTime = Date.now();
    }
    timer = setInterval(timerFunc, 1000);
}

function stopFunc() {
    clearInterval(timer);
    stopWatch.innerHTML = "00:00:00";
    save = true;
    console.log(save);
}

function pauseFunc() {
    clearInterval(timer);
    save = false;
    console.log(save);
}

function timerFunc() {
    currTime = Date.now();
    let elapsedTime = Math.round((currTime - startTime)/ 1000);
    let h = addZero(Math.floor(elapsedTime / 3600));
    let m = addZero(Math.floor((elapsedTime - (h * 3600)) /60 ));
    let s = addZero(Math.floor(elapsedTime - (h * 3600) - (m * 60))); 
    stopWatch.innerHTML = `${h}:${m}:${s}`;
}
