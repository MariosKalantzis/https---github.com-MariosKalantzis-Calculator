const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

let num1 = "";
let num2 = "";
let dispOperator = null;

const operate = (operator, list) => {
    const operation = operations[operator]
    if (!operation) {
        throw new Error("Unsupported operator");
    }
    return list.reduce(operation);
}

const container = document.querySelector('.container');
const display = document.getElementById("display");
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const operateBtn = document.getElementById('operate');
const clearButton = document.querySelector('clear');
const firstDisplayNumber = document.getElementById('first-display-number');
const DisplayOperator = document.getElementById('display-operator');
const secondDisplayNumber = document.getElementById('second-display-number');


numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        num1 = num1.concat(e.target.dataset.value);
        firstDisplayNumber.textContent = num1;
        if (!dispOperator === null) {
            num2 = num2.concat(e.target.dataset.value);
            secondDisplayNumber.textContent = num2;
        }
        console.log(e.target.dataset.value);
    })
});



// console.log(operate("+", [1, 5]));