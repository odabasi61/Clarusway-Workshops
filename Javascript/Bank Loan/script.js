let income = Number(prompt("Please enter your income"));
let outcome = Number(prompt("Please enter your outcome"));
let minimumWage = 5500;
if (isNaN(income) || isNaN(outcome)) {
  console.log("Please enter only digits.");
} else {
  const credit =
    income - outcome > minimumWage
      ? "🎉 You are eligible for bank loan"
      : "⛔️ No credit!";
  console.log(credit);
}
