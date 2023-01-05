"use strict";

const array = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10];
const sameObjects = findSameObjects(array);

function findSameObjects(array) {
  let sameObjects = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        sameObjects.push(array[i]);
      }
    }
  }
  return sameObjects;
}
console.log(array);
console.log(sameObjects);
