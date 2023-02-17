let add = function(x , y){
    return x + y;
}

let subtract = function(x , y){
    return x - y;
}

let multiply = function(x , y){
    return x * y;
}

let divide = function(x , y){
    return x / y;
}

const operate = function (operator,x,y){
    if (operator === '+'){
        return add (x,y)
    }
    else if (operator === '-'){
        return subtract (x,y)
    }
    else if (operator === '*'){
        return multiply (x,y)
    }
    else if (operator === '/'){
        return divide (x,y)
    }
    else {
        console.log('Invalid operator!')
    }
}

