let age = Number(prompt("Please enter your age:"));

const vote =
  age >= 18
    ? `You are ${age} years old. You are eligible for voting`
    : `You can't vote. You should vait for ${18 - age} years to vote.`;
console.log(vote);
