"use strict";

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

let string = "Hello, World!";
let result = removeVowels(string);
console.log(result); // prints "Hll, Wrd!"


// Another solution

// function removeVowels(str) {
//   // 1. stringi arraye çevir
//   // 2. arrayi filtrele
//   // 3. arrayi stringe çevir
//   return str.split('').filter((a) => !'aeiou'.includes(a)).join('');
// }
// ​
// console.log(removeVowels('day')); // d
// console.log(removeVowels('apple')); // ppl
// console.log(removeVowels('javascript')); // jvscrpt