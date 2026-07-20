const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

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

numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.dataset.value);
    })
})



// console.log(operate("+", [1, 5]));