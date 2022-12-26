// enter a random number

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return fib2;
};

const n = Number(prompt("Please enter a number:"));
if (n <= 0) {
  console.log('"n" should be bigger than 0.');
} else if (isNaN(n)) {
  console.log('"n" should be a number.');
} else {
  console.log(`Fibonacci(${n}) = ${fibo(n)}`);
}
