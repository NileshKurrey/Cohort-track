

let inputEl = document.getElementById('display');
let operands = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');

document.getElementById('calculate').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clearDisplay);

function clearDisplay() {
    document.getElementById('display').value = '';
}    


operands.forEach(button => {
button.addEventListener('click', function(event) {
    let number = event.target.innerText;
    appendNumber(number);
});    
});

operators.forEach(button => {
button.addEventListener('click', function(event) {
    let operator = event.target.innerText;  
    appendOperator(operator);
});    
});



function calculate() {
let expression = inputEl.value; // 2 + 3    2 + 3 * 4
let tokens = expression.split(' ');
let result = 0;
let operator = '';
for (let i = 0; i < tokens.length; i++) {
    if (i % 2 == 0) {
        let number = parseInt(tokens[i]);
        if (operator == '') {
            result = number;
        } else if (operator == '+') {
            result += number;
        } else if (operator == '-') {
            result -= number;
        } else if (operator == '*') {
            result *= number;
        } else if (operator == '/') {
            result /= number;
        }
    } else {
        operator = tokens[i];
    }
}   
inputEl.value = result;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
function appendNumber(number) {
inputEl.value += number;
}

function appendOperator(operator) {
inputEl.value += ' ' + operator + ' ';
}

function clearDisplay() {
document.getElementById('display').value = '';
}
