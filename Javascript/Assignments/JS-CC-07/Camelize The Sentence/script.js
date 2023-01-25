"use strict";

window.onload = function () {
  document.querySelector(".inp").focus();
};

const convert = document.querySelector(".convert");
const inp = document.querySelector(".inp");

convert.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = document.querySelector(".inp").value;
  document.querySelector(".result").textContent = camelCase(inputValue);
});

function camelCase(inputValue) {
  return inputValue
    .split(/[^a-zA-Z0-9]/g)
    .map((x, index) => {
      if (index === 0) return x.toLowerCase();
      return x.substr(0, 1).toUpperCase() + x.substr(1).toLowerCase();
    })
    .join("");
}

inp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert.click();
  }
});
