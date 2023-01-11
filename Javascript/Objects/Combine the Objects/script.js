"use strict";

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

function combine(objA, objB) {
  let combined = {};
  for (const key in objA) {
    combined[key] = objA[key];
  }
  for (const key in objB) {
    if (combined[key]) {
      combined[key] += objB[key];
    } else {
      combined[key] = objB[key];
    }
  }
  return combined;
}

const combined = combine(objA, objB);
console.log(combined); // output {a: 13, b: 20, c: 36, d: 3}
