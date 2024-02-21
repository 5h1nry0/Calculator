let zeroButton = document.getElementById("zero")
let oneButton = document.getElementById("one")
let twoButton = document.getElementById("two")
let threeButton = document.getElementById("three")
let fourButton = document.getElementById("four")
let fiveButton = document.getElementById("five")
let sixButton = document.getElementById("six")
let sevenButton = document.getElementById("seven")
let eightButton = document.getElementById("eight")
let nineButton = document.getElementById("nine")
let addButton = document.getElementById("add")
let substractButton = document.getElementById("substract")
let multiplyButton = document.getElementById("multiply")
let divideButton = document.getElementById("divide")
let equalsButton = document.getElementById("equals")
let clearButton = document.getElementById("clear")
let backspaceButton = document.getElementById("backspace")
let dotButton = document.getElementById("dot")
let display = document.getElementById("display")
display.value = []
let firstNumber = ''
let secondNumber = ''
let operator = ''

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(){
    if(operator=="+") {
        firstNumber = add(Number(firstNumber),Number(secondNumber))
        secondNumber = ''
    }
     else if(operator=="-") {
        firstNumber= subtract(Number(firstNumber),Number(secondNumber))
        secondNumber = ''
    }  
     else if(operator=="*") {
        firstNumber= multiply(Number(firstNumber),Number(secondNumber))
        secondNumber = ''
    }
     else if(operator=="/") {
        firstNumber= divide(Number(firstNumber),Number(secondNumber))
        secondNumber = ''
    }
     else {return}

     return firstNumber
}


oneButton.addEventListener('click', (e) => {
    // if(display.value[0]===undefined||
    //     display.value.length== 2) {
    //         display.value.push(1);
    //         display.textContent = '1';
    //     }

    if(operator ==='') {
        firstNumber = firstNumber +'1';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'1';
        display.textContent = secondNumber
    }
    else {return}    
})

twoButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'2';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'2';
        display.textContent = secondNumber
    }
    else {return}    
})

threeButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'3';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'3';
        display.textContent = secondNumber
    }
    else {return}    
})

fourButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'4';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'4';
        display.textContent = secondNumber
    }
    else {return}    
})

fiveButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'5';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'5';
        display.textContent = secondNumber
    }
    else {return}    
})

sixButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'6';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'6';
        display.textContent = secondNumber
    }
    else {return}    
})

sevenButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'7';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'7';
        display.textContent = secondNumber
    }
    else {return}    
})

eightButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'8';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'8';
        display.textContent = secondNumber
    }
    else {return}    
})

nineButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'9';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'9';
        display.textContent = secondNumber
    }
    else {return}    
})

zeroButton.addEventListener('click', (e) => {
    if(operator ==='') {
        firstNumber = firstNumber +'0';
        display.textContent = firstNumber
    }
    else if(operator !=='') {
        secondNumber = secondNumber +'0';
        display.textContent = secondNumber
    }
    else {return}     
})

addButton.addEventListener('click', (e) => {
    // if(display.value[1]===undefined) {
    //     display.value.push('+');
    // }
    // else {
    //     console.log(display.value)
    //     return
    // }    
    if(secondNumber ==='') {
        operator = '+'
    }
    else if(secondNumber !=='') {
        operate(firstNumber,operator,secondNumber);
        display.textContent = Number(firstNumber).toFixed(2);
        operator = '+'
    }
})

substractButton.addEventListener('click', (e) => {
    if(secondNumber ==='') {
        operator = '-'
    }
    else if(secondNumber !=='') {
        operate(firstNumber,operator,secondNumber);
        display.textContent = Number(firstNumber).toFixed(2);
        operator = '-';
    }
})

multiplyButton.addEventListener('click', (e) => {
    if(secondNumber ==='') {
        operator = '*'
    }
    else if(secondNumber !=='') {
        operate(firstNumber,operator,secondNumber);
        display.textContent = Number(firstNumber).toFixed(2);
        operator = '*'
    }
})

divideButton.addEventListener('click', (e) => {
    if(secondNumber ==='') {
        operator = '/'
    }
    else if(secondNumber !=='') {
        operate(firstNumber,operator,secondNumber);
        display.textContent = Number(firstNumber).toFixed(2);
        operator = '/';
    }
})

equalsButton.addEventListener('click', (e) => {
    if(secondNumber ==='') return
    else {
        operate(firstNumber,operator,secondNumber);
        display.textContent = Number(firstNumber).toFixed(2)
    }
})

clearButton.addEventListener('click', (e) => {
    firstNumber = ''
    secondNumber = ''
    operator = ''
    display.textContent = firstNumber
})

backspaceButton.addEventListener('click', (e) => {
    if(secondNumber !=='') {
        secondNumber = String(secondNumber).slice(0,-1)
        display.textContent = Number(secondNumber)
    }
    else if(firstNumber !=='') {
        firstNumber = String(firstNumber).slice(0,-1)
        display.textContent = Number(firstNumber)
    }
    else {return}  
})

dotButton.addEventListener('click', (e) => {
    if(operator ===''&& !firstNumber.includes('.')) {
        firstNumber = firstNumber +'.';
        display.textContent = firstNumber
    }
    else if(operator !==''&& !secondNumber.includes('.')) {
        secondNumber = secondNumber +'.';
        display.textContent = secondNumber
    }
    else {return}  
})

