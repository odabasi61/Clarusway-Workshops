let grade = Number(prompt("Please enter your grade:"));

if (grade > 90 && grade <= 100) {
  console.log(`your grade is AA.`);
} else if (grade > 80 && grade <= 90) {
  console.log(`your grade is AB.`);
} else if (grade > 70 && grade <= 80) {
  console.log(`your grade is BB.`);
} else if (grade > 60 && grade <= 70) {
  console.log(`your grade is BC.`);
} else if (grade > 50 && grade <= 60) {
  console.log(`your grade is CC.`);
} else if (grade > 40 && grade <= 50) {
  console.log(`your grade is CD.`);
} else if (grade > 30 && grade <= 40) {
  console.log(`your grade is DD.`);
} else if (grade >= 0 && grade <= 30) {
  console.log(`your grade is FF.`);
} else {
  console.log("Please enter a number between 0 and 100.");
}
