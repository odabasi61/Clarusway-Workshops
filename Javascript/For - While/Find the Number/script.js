let enterNumber = Number(prompt("Please enter a number between 0 and 100."));

while (isNaN(enterNumber) || enterNumber < 0 || enterNumber > 100) {
    console.log("Please enter a digit between 0 and 100.");
    enterNumber = Number(prompt("Please enter a number between 0 and 100."));
}  
console.log(`Your guess (${enterNumber}) is between 0 and 100. Congrats!`);