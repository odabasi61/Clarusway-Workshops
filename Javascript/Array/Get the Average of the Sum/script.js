"use strict";

const arr = [1, 2, 3, 4, 5];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  count += 1;
}
console.log(`The average of the sum of the array is ${sum / count}`);
