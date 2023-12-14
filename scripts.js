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

let num1;
let num2;
let operator;

const operate = (num1, num2, operator)=>{
    add(num1,num2);
}