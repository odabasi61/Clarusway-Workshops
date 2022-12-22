function oddOrEven(num) {
  // return num % 2 ? "ODD" : "EVEN"
  return num % 2 === 0 ? "EVEN" : "ODD";

  //? Alternative
  // let result
  // if (num % 2 === 0) {
  //   result = "EVEN"
  // } else {
  //   result = "ODD"
  // }
  // return result;
}

const number = +prompt("Please enter a number to check if it is odd or even:");
const oddEven = oddOrEven(number);
console.log(`${number} is ${oddEven}`);
