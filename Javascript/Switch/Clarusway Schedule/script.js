const day = prompt("Please enter a day (first letter should be capitalized):");

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("InClass activities");
    break;
  case "Friday":
    console.log("Teamwork");
    break;
  case "Saturday":
    console.log("InClass + Workshop");
    break;
  case "Sunday":
    console.log("Self-Study");
    break;
  default:
    console.log("Please be sure you entered the day correctly.");
    break;
}
