let list = [];
let operators = ["+", "-", "X", "/"]
let operator = "";
let operatorIndex = NaN;
let output = "0"
let equation = document.getElementById("equation");
let result = document.getElementById("result");

function mainFunc(entry) {
    // Main function
    let input = entry.textContent;
    if (input === "AC") {
        rsetFunc();
        result.innerHTML = "0";
    } else if(input === "DEL") {
        list.pop();
    } else if(input === "=") {
        if(operatorIndex != 0 && operatorIndex != list.length - 1) {
            calculation();
        }
    } else if(operators.includes(input)){
        if(operators.includes(list[list.length - 1])) {
            list.pop();
        } else if(operatorIndex == 0){
            if(operator == "-"){
                operator = "";
                operatorIndex = NaN;
            } else {
                list.shift();
            }
        } else if(operator !== "" && operatorIndex !== NaN){
            calculation();
        }
        operator = input;
        operatorIndex = list.length;
        list.push(input);
    } else {
        list.push(input);
    }
    print(list);
}

function print(lst) {
    // Print equation 
    let itemNum = lst.length;
    equation.innerHTML = lst.join("");
    if(itemNum === 0) {
        equation.style.fontSize = "20px";
        equation.innerHTML = "0";
    } else if(itemNum < 25) {
        equation.style.fontSize = "20px";
    } else if(itemNum < 40) {
        equation.style.fontSize = "15px";
    } else {
        equation.style.fontSize = "10px";
    }
    
}


function calculation() {
    let string1 = list.slice(0, operatorIndex);
    console.log(string1);
    let string2 = list.slice(operatorIndex + 1, list.length)
    console.log(string2);
    let operand1 = parseFloat(string1.join(""));
    console.log(operand1);
    let operand2 = parseFloat(string2.join(""));
    console.log(operand2);

    if(operator === "+") {
        output = operand1 + operand2;
    } else if(operator === "-") {
        output = operand1 - operand2;
    } else if(operator === "X") {
        output = operand1 * operand2;
    } else if(operator === "/") {
        output = operand1 / operand2;
    } else {
        output = 0;
    }
    output = Math.round(output * 1000) /1000;
    result.innerHTML = output;
    rsetFunc();
    list.push(output.toString());
}

function rsetFunc() {
    list = [];
    operator = "";
    operatorIndex = NaN;
    
}