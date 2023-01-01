const check = prompt("Enter a word and check if it exists in the array:");
const arr = ["Today", "is", "a", "sunny", "day"];

const checkTheArray = (arr, check) => {
  if (arr.includes(check)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkTheArray(arr, check));
