// const button = document.getElementById('submit');
// const a = document.getElementById('input1');
// const b = document.getElementById('input2');
// const result = document.getElementById('result');

// function add(a, b) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     console.log('clicked')
//     result.innerText = `${add(a.value, b.value)}`;
// })

function output(fruits) {
  const arr = fruits.split(" ");
  arr.forEach((fruit) => {
    console.log(fruit);
  });
}

output("Orange Apple Grape");
output(["orange", "Apple", "Banana"]);

console.log("Hello");
