const year = Number(prompt("Enter a year:"));
const month = Number(prompt('Enter a month as number (1-12):'));
if (month === 2) {
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`February in ${year} has 29 days.`);
}  else {
  console.log(`February in ${year} has 28 days.`);
    }
}
else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) { console.log(`${month}. month in ${year} has 31 days.`); }
else if (month === 4 || month === 6 || month === 9 || month === 11) { console.log(`${month}. month in ${year} has 30 days.`); }
else {console.log('Please enter a month between 1 and 12.')}