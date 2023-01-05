"use strict";

const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let exponentials = [];
let sumOfExponentials = 0;

function getExponentials(exponential) {
  return exponential ** 2;
}
for (let i = 0; i < arrOfNums.length; i++) {
  exponentials.push(getExponentials(arrOfNums[i]));
}
console.log(exponentials);

for (let j = 0; j < exponentials.length; j++) {
  sumOfExponentials += exponentials[j];
}
console.log(sumOfExponentials);
