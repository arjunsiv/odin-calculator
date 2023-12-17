const add = (num1, num2)=>{
    return num1 + num2;
}

const subtract = (num1, num2)=>{
    return num1 - num2;
}

const multiply = (num1, num2)=>{
    return num1 * num2;
}

const divide = (num1, num2)=>{
    if(num2 == 0){
        return "Divide with zero error";
    }
    return num1 / num2;
}

const dot = document.querySelector(".dot");
dot.addEventListener("click",(e)=>{
    dot.disabled = true;
    displayValue += ".";
    populateDisplay(displayValue);
})

const operate = (num1, num2, operator)=>{
    let ans;
    if (operator =="+") {
        ans = add(Number(num1),Number(num2));
    }
    else if (operator =="-") {
        ans = subtract(num1,num2);
    }
    else if (operator =="*") {
        ans = multiply(num1,num2);
    }
    else if (operator =="/") {
        ans = divide(num1,num2);
    }
    return Math.round(ans * 1000) /1000
}

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";


const numbers = [...document.querySelectorAll(".number")];
console.log(numbers);
for(let number of numbers){
    number.addEventListener("click", (e)=>{
        displayValue +=e.target.innerText
        populateDisplay(displayValue);
    });
}

const operators = [...document.querySelectorAll(".operator")];
for(let operatorButton of operators){
    operatorButton.addEventListener("click", (e)=>{
        dot.disabled = false;
        if (!num1){
            num1 = displayValue;
        }
        else{
            num2 = displayValue;
            num1 = operate(num1,num2,operator);
            displayValue = num1;
            populateDisplay(displayValue);
        }
        operator = e.target.innerText;
        displayValue = "";
    })
}

const equal = document.querySelector(".equals");
equal.addEventListener("click",(e)=>{
    dot.disabled = false;
    num2 = displayValue;
    displayValue = operate(num1,num2,operator);;
    populateDisplay(displayValue);
})

const clear = document.querySelector(".clear");
clear.addEventListener("click",(e)=>{
    operator="";
    num1="";
    num2="";
    displayValue="";
    dot.disabled = false;
    populateDisplay(displayValue);
})

const textBox = document.querySelector(".textbox");

const populateDisplay = (value) =>{
    textBox.innerHTML = value;
}