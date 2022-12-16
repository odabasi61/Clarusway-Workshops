const number = Number(prompt("Please enter a digit between 0 and 100"));

const num =
  number >= 0 && number <= 100
    ? `${number} is a number between 0 and 100`
    : `${number} is not a number between 0 and 100`;
console.log(num);
