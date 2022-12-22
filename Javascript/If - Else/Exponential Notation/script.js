const number = Number(prompt("Choose a number:"));
const exponential = Number(
  prompt(`Which power of ${number} would you like to take?`)
);

if (isNaN(number) || isNaN(exponential)) {
  console.log("Please enter only digits.");
} else {
  console.log(number ** exponential);
}
