let total = 0;
let rep = 0;
while (true) {
  let inputStr = prompt(
    "Enter a number between 0 and 100, or 'q' or 'Q' to quit: "
  );
  if (inputStr === "q" || inputStr === "Q") {
    break;
  } else {
    let inputNum = parseInt(inputStr);
    if (!isNaN(inputNum) && 0 <= inputNum && inputNum <= 100) {
      total += inputNum;
      rep = rep + 1;
    } else {
      alert("The number must be between 0 and 100. Try again.");
    }
  }
}
console.log(`The average of the numbers you entered is ${total / rep}`);
