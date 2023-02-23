document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");

    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operator = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");


})



/*
const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('.operators button:nth-child(5)');
const equalButton = document.getElementById('equal');
let result = resultInput.value
let x = 
buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        const value = event.target.value;
        resultInput.value += value;

    });
});
let clear = function (){
    if (resultInput.value != ""){
        resultInput.value = "";
    };
}

clearButton.addEventListener('click',clear)

const operators = {
    add: function(x,y){
        return x + y;
    },
    subtract: function (x,y){
        return x - y;
    },
    multiply: function(x,y){
        return x * y;
    },
    divide: function(x,y){
        return x / y;
    },
}

const operate = function (x,operator,y){
    if (operator === '+'){
        return operators.add (x,y)
    }
    else if (operator === '-'){
        return operators.subtract (x,y)
    }
    else if (operator === '*'){
        return operators.multiply (x,y)
    }
    else if (operator === '/'){
        return operators.divide (x,y)
    }
    else {
        console.log('Invalid operator!')
    }
}

const calculation = function(x,operator,y){
    
}*/