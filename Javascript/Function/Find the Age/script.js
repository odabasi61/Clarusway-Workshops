const birthYear = Number(prompt("Please enter your birth year:"));

const age = (birthYear) => {
  if (isNaN(birthYear)) {
    console.log("Please enter only digits.");
  } else if (birthYear > new Date().getFullYear()) {
    console.log("Please do not enter a year from the future");
  } else {
    console.log(`You are ${new Date().getFullYear() - birthYear} years old.`);
  }
};
age(birthYear);
