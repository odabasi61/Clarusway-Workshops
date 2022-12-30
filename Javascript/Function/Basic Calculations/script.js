const num1 = Number(prompt("Please enter a number:"));
const operator = prompt("Please enter an operator (+, -, *, /):");
const num2 = Number(prompt("Please enter a number:"));
let result = 0;

const calculation = (num1, operator, num2) => {
  if (isNaN(num1) || isNaN(num2) || !["+", "-", "*", "/"].includes(operator)) {
    console.log("Please enter only digits and valid operators (+, -, *, /)");
  } else {
    if (operator == "+") {
      return (result = num1 + num2);
    } else if (operator == "-") {
      return (result = num1 - num2);
    } else if (operator == "*") {
      return (result = num1 * num2);
    } else if (operator == "/") {
      return (result = num1 / num2);
    }
  }
};
console.log(`The result is ${calculation(num1, operator, num2)}`);
