function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

// Countdown Timer Code
let strSecond = 0;
let strMinute = 0;
let strHour = 0;

function startTimerFunc() {
    console.log("satrt")
}
  
function stopTimerFunc() {
    console.log("stop")
}

function pauseTimerFunc() {
    console.log("pause")
}

function addSecondFunc() {
    strSecond++;
    print();
}

function addMinuteFunc() {
    console.log("+m")
    strMinute++;
    print();
}

function addHourFunc() {
    strHour++;
    print();
}

function subSecondFunc() {
    if(strSecond > 0) {
        strSecond--
    }
    print();
}

function subMinuteFunc() {
    if(strMinute > 0) {
        strMinute-- 
    }
    print();
}

function subHourFunc() {
    if(strHour > 0) {
        strHour--
    }   
    print();
}  


function print() {
    strSecond = addZero(strSecond);
    strMinute = addZero(strMinute);
    strHour = addZero(strHour);
    document.getElementById("countdown").innerHTML = `${strHour}:${strMinute}:${strSecond}`
}