
let counter = 0;
let counterScreen = document.getElementById("screen");
let selection = document.getElementById("selection");
let textView = document.getElementById("text");

function counterFunc(){
    counter++;
    counterScreen.innerHTML = counter;
}

function rsetFunc() {
    counter = 0;
    counterScreen.innerHTML = counter;
}


function selectFunc() {
    let text = selection.value;
    textView.innerHTML = text;
}