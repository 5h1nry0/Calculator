function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(firstNumber,operator,secondNumber){
 switch (operator){
    case "+" : add(firstNumber,secondNumber)   
    case "-" : substract(firstNumber,secondNumber)   
    case "*" : multiply(firstNumber,secondNumber)
    case "/" : divide(firstNumber,secondNumber)
    }
}
