const num1 = Number(prompt("Please enter the first number"));
const operator = prompt("Enter operator (either +, -, * or /)");
const num2 = Number(prompt("Please enter the second number"));

let result;

if (operator == "+") result = num1 + num2;
else if (operator == "-") result = num1 - num2;
else if (operator == "*") result = num1 * num2;
else if (operator == "/") result = num1 / num2;
else {
  console.log("Please choose one of the operator above.");
}

console.log(result);
