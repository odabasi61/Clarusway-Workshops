const number = Number(prompt("Please enter a number:"));

if (number % 2 === 0) console.log(`${number} is even number.`);
else if (number % 2 === 1) console.log(`${number} is odd number.`);
else console.log("Please enter a number.");
