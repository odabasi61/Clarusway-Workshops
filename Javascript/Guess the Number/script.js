let secretNumber = Math.trunc(Math.random() * 10) + 1; // this code generates a random number between 0-10
let score = 5;
let attempt = 0;

while (true) {
  attempt = attempt + 1;
  score = score - 1;
  score > 0;
  let yourGuess = Number(prompt("Please enter a number between 0 and 10:"));
  if (yourGuess === secretNumber) {
    console.log(
      `Congrats. You won in your ${attempt}. attempt. Your score is ${
        score + 1
      }.` // here i added +1 to the score because in the attempt you know the number it still reduces the score 1 point
    );
    break;
  } else {
    if (!isNaN(yourGuess) && yourGuess >= 0 && yourGuess <= 10) {
      if (score > 0) {
        if (
          yourGuess > secretNumber
            ? console.log("Your guess is bigger than secret number.")
            : console.log("Your guess is smaller than secret number.")
        );
      } else {
        console.log("You lost the game!");
        break;
      }
    } else {
      if (isNaN(yourGuess) || yourGuess >= 0 || yourGuess <= 10) {
        if (score > 0) {
          console.log("Please enter a digit between 0 and 10.");
        } else {
          console.log("You lost the game!");
          break;
        }
      }
    }
  }
}
