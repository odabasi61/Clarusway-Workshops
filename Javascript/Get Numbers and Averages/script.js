// get 5 numbers from the user and sum the numbers and give the average

let count = 0;
let sum = 0;

while (count < 5) {
  const number = Number(prompt("Please enter a number:"));
  sum += number;
  count++;
}
console.log(`Average of the numbers you entered is ${sum / count}`);
