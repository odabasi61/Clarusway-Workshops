const salary = Number(prompt("Enter your salary:"));
const minimumWage = 5500;

if (salary < minimumWage) {
  console.log(`Your salary will be ${salary * 1.5} TL.`);
} else if (salary > minimumWage) {
  console.log(`Your salary will be ${Math.trunc(salary * 1.1)} TL.`);
} else {
  console.log("Your salary will not change.");
}
