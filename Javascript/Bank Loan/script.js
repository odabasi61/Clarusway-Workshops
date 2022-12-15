const income = Number(prompt("Please enter your income"));
const outcome = Number(prompt("Please enter your outcome"));
const minimumWage = 5500;

if (income - outcome > minimumWage) {
  console.log("🎉 You are eligible for bank loan");
} else {
  console.log("⛔️ No credit!");
}
