const base = Number(prompt("Please enter base length:"));
const height = Number(prompt("Please enter height"));

function areaOfTriangle(base, height) {
  return (base * height) / 2;
}
console.log(areaOfTriangle(base, height));
