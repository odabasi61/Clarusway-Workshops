let number = Number(
  prompt("Please enter a number and check if it prime number or not:")
);

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return console.log(`${number} is not a prime number`);
    }
  }
  return console.log(`${number} is a prime number`);
}
isPrime(number);
