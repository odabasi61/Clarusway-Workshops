"use strict";

function anagram(word, test) {
  word = word.toLowerCase();
  test = test.toLowerCase();
  if (word.split("").sort().join("") === test.split("").sort().join("")) {
    return `The words ${word} and ${test} are anagrams.`;
  } else if (word.length !== test.length) {
    return `Missing characters for test case ${word} and ${test}.`;
  } else if (
    word.split("").sort().join("") !== test.split("").sort().join("")
  ) {
    return `${test} is not anagram of ${word}.`;
  }
}
console.log(anagram("foefet", "toffee")); // output: The words foefet and toffee are anagrams.
console.log(anagram("Buckethead", "DeathCubeK")); // output: The words buckethead and deathcubek are anagrams.
console.log(anagram("Twoo", "WooT")); // output: The words twoo and woot are anagrams.
console.log(anagram("dumble", "bumble")); // output: bumble is not anagram of dumble.
console.log(anagram("ound", "round")); // output: Missing characters for test case ound and round.
console.log(anagram("apple", "pale")); // output: Missing characters for test case apple and pale.
