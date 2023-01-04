const arrayOfSheeps = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "goat",
  "sheep",
  "sheep",
  "cow",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "lamb",
];

const countTheSheeps = (arrayOfSheeps) => {
  let count = 0;
  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] === "sheep") {
      count = count + 1;
    }
  }
  return count;
};
console.log(countTheSheeps(arrayOfSheeps));
