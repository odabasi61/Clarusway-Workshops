const birthYear = Number(prompt("Please enter your birth year:"));

const age = (birthYear) => new Date().getFullYear() - birthYear;
console.log(`You are ${age(birthYear)} years old.`);
