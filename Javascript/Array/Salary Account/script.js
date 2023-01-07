"use strict";

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const moreThan10000 = salaries.filter((s) => s >= 10000);
const range = salaries.filter((s) => s >= 6000 && s <= 20000);
console.log(moreThan10000, range);

// If salary is less than 9000, increase the salary by 10%

const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));
console.log(lessThan9000Inc);

// Get the total salary paid
// t for tatal and s for salary (when using reduce, we must enter two inputs)
const totalSalary = salaries.reduce((t, s) => t + s);
console.log(totalSalary);

// Find the sum of the increased salaries
const sumOfRaisedSalaries = salaries
  .filter((s) => s < 9000)
  .map((s) => s * 1.1)
  .reduce((t, s) => t + s, 0);
console.log(sumOfRaisedSalaries);
