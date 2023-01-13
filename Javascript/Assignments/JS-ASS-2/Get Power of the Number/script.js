const num1 = Number(
  prompt("Please enter the number of which you want to get the square:")
);
const num2 = Number(
  prompt("Please enter the number of which you want to get the cube:")
);
const num3 = Number(
  prompt("Please enter the number of which you want to get the power:")
);
const num4 = Number(prompt(`Which power of ${num3} you want to get?`));

if (!isNaN(num1 && num2 && num3 && num4)) {
  const squareOfNumber = function (num1) {
    return num1 ** 2;
  };

  const cubeOfNumber = function (num2) {
    return num2 ** 3;
  };

  const powerOfNumber = function (num3, num4) {
    return num3 ** num4;
  };
  console.log(
    squareOfNumber(num1),
    cubeOfNumber(num2),
    powerOfNumber(num3, num4)
  );
} else {
  console.log("Please enter only digits.");
}
