let num = Number(
  prompt("Please enter an number and see how many digit place it has.")
);

if (!isNaN(num) && num > 0) {
  function countDigits(num) {
    // Convert the number to a string
    let str = num.toString();
    // Return the length of the string
    return str.length;
  }
  console.log(`The number you entered has ${countDigits(num)} digits.`);
} 
else {
  console.log("Please enter only positive numbers.");
}
