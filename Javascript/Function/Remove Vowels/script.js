"use strict";

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

let string = "Hello, World!";
let result = removeVowels(string);
console.log(result); // prints "Hll, Wrd!"
