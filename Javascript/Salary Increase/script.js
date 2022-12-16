let salary = Number(prompt("Enter your salary:"));
let minimumWage = 5500;

if (salary < minimumWage) {
  console.log(`Your salary will be ${salary * 1.5} TL.`);
} else {
  console.log(`Your salary will be ${Math.trunc(salary * 1.1)} TL.`);
}
