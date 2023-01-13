const arr1 = [12, 14, 16];
const arr2 = [11, 13, 17];

const mergeOfArrays = arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergeOfArrays);
