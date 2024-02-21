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
let display = document.getElementById("display")
display.value = []
let result = 0

function add(a,b){
    let result = a+b
    display.value = result
    display.textContent = result
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

oneButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
            display.value.push(1);
            display.textContent = '1';
        }
    else {
        console.log(display.value)
        return
    }    
})

twoButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(2);
        display.textContent = '2';
    }
    else {
        console.log(display.value)
        return
    }    
})

threeButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
    display.value.length== 2) {
        display.value.push(3);
        display.textContent = '3';
    }
    else {
        console.log(display.value)
        return
    }    
})

fourButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(4);
        display.textContent = '4';
    }
    else {
        console.log(display.value)
        return
    }    
})

fiveButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(5);
        display.textContent = '5';
    }
    else {
        console.log(display.value)
        return
    }    
})

sixButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(6);
        display.textContent = '6';
    }
    else {
        console.log(display.value)
        return
    }    
})

sevenButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(7);
        display.textContent = '7';
    }
    else {
        console.log(display.value)
        return
    }    
})

eightButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(8);
        display.textContent = '8';
    }
    else {
        console.log(display.value)
        return
    }    
})

nineButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(9)
        display.textContent = '9'
    }
    else {
        console.log(display.value)
        return
    }    
})

zeroButton.addEventListener('click', (e) => {
    if(display.value[0]===undefined||
        display.value.length== 2) {
        display.value.push(0);
        display.textContent = '0';
    }
    else {
        console.log(display.value)
        return
    }    
})

addButton.addEventListener('click', (e) => {
    if(display.value[1]===undefined) {
        display.value.push('+');
    }
    else {
        console.log(display.value)
        return
    }    
})

substractButton.addEventListener('click', (e) => {
    if(display.value[1]===undefined) {
        display.value.push('-');
    }
    else {
        console.log(display.value)
        return
    }    
})

multiplyButton.addEventListener('click', (e) => {
    if(display.value[1]===undefined) {
        display.value.push('*');
    }
    else {
        console.log(display.value)
        return
    }    
})

divideButton.addEventListener('click', (e) => {
    if(display.value[1]===undefined) {
        display.value.push('/');
    }
    else {
        console.log(display.value)
        return
    }    
})

equalsButton.addEventListener('click', (e) => {
    if(display.value.length== 3 ) {
        operate(display.value);
    }
    else {return}    
})




