let n = Number(
  prompt("Please enter a number of which you want to get factorial:")
);

let factorial = (n) => {
  if (n < 0) {
    return console.log(`The number should be bigger than or equal to zero`);
  } else if (n == 0 || n == 1) {
    return 1;
  } else if (isNaN(n)) {
    return console.log("Please enter only digits");
  } else {
    return n * factorial(n - 1);
  }
};
console.log(`${n}! = ${factorial(n)}`);
