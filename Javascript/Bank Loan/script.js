let income = Number(prompt("Please enter your income"));
let outcome = Number(prompt("Please enter your outcome"));
let minimumWage = 5500;
const credit =
  income - outcome > minimumWage
    ? "🎉 You are eligible for bank loan"
    : "⛔️ No credit!";
console.log(credit);
