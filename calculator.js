const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let result = resultInput.value;
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

const operate = function (operator,x,y){
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

const clearButton = document.querySelector('.operators button:nth-child(5)');
clearButton.addEventListener('click',clear)