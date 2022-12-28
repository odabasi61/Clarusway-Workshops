const number = Number(prompt("Please enter a number:"));

function sumOfDivisors(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfDivisors(number));
