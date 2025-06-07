function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
}
function calculator(a,b,operation) {
    if (operation === "add") {
        return add(a, b);
    }
    else if (operation === "subtract") {
        return subtract(a, b);
    }
    else if (operation === "multiply") {
        return multiply(a, b);
    }
    else if (operation === "divide") {
        return divide(a, b);
    }
    else {
        return "Error: Invalid operation.";
    }
}

const result1 = calculator(10, 5, "add");
const result2 = calculator(10, 5, "subtract");
const result3 = calculator(10, 5, "multiply");
const result4 = calculator(10, 5, "divide");
console.log("Addition:", result4);