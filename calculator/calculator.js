let list = [];
let output = "0"
let equation = document.getElementById("equation");
let result = document.getElementById("result");

function mainFunc(entry) {
    // Main function
    let input = entry.textContent;
    if (input === "AC") {
        list = [];
        result.innerHTML = "0";
        print(list);
    } else if(input === "DEL") {
        list.pop();
        print(list);
    } else if(input === "=") {
        calculation(list);
    } else if(input === "^" || input == "%" || input == "/" || input == "X" || input == "-" || input == "+"){
        list.push(input);
        print(list);
    } else if(input === "(" || input == ")") {
        list.push(input);
        print(list);
    } else {
        list.push(input);
        print(list);
    }
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


function calculation(lst) {
    result.innerHTML = list;
}