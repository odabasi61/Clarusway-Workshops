const year = Number(prompt("Please enter a year:"));

if (!isNaN(year)) {
  const leapYear = function (year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)
      ? `${year} is a leap year.`
      : `${year} is not a leap year.`;
  };
  console.log(leapYear(year));
} else {
  console.log("Please enter only digits.");
}
