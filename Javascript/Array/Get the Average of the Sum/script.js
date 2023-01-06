"use strict";

const arr = [1, 2, 3, 4, 5];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  count += 1;
}
console.log(`The average of the sum of the array is ${sum / count}`);



// Another solution

// 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3
​
// function average(arr) {
//   // Dizideki tüm elemanların toplamını hesapla
//   let sum = 0;
//    arr.forEach((a) =>sum += a);
//   // Dizideki tüm elemanların sayısını hesapla
//   let count = arr.length;
//   // Ortalamayı hesapla ve döndür
//   return sum / count;
// }
// ​
// console.log(average([1,2,3,4,5])); // Output: 3
