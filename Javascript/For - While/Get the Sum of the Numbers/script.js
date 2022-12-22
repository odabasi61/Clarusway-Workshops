// Get numbers from the user. When a negative number is entered, stop the loop and give the total numbers entered till that time
let sum = 0;

while (true) {
  const number = Number(prompt("Please enter a number:"));
  if (number < 0 || isNaN(number)) {
    break;
  }
  sum += number;
}
console.log(`Sum of the numbers you entered is ${sum}.`);
