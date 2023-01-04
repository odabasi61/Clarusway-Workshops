"use strict";

const howManyLetters = (word, letter) => {
  let count = 0;
  word = word.split("").join("");
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes(letter)) {
      count += 1;
    }
  }
  return `The word "${word}" contains ${count} times the letter "${letter}"`;
};

console.log(howManyLetters("concatinate", "a")); //The word concatinate contains 2 times the letter a
console.log(howManyLetters("Pseudopseudohypoparathyroidism", "o")); //The word "Pseudopseudohypoparathyroidism" contains 4 times the letter "o"
console.log(howManyLetters("ali", "e")); //The word "ali" contains 0 times the letter "e"
