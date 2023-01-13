"use strict";

const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const input = document.querySelector("input");

const ul = document.createElement("ul");
input.after(ul);

add.addEventListener("click", function () {
  !input.value
    ? alert("Please write down something in the field!")
    : (ul.innerHTML += `<li>${input.value}</li>`);
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    add.click();
  }
  if (e.code === "Escape") {
    input.value = "";
  }
});

remove.addEventListener("click", function () {
  let lastItem = ul.lastElementChild;
  ul.removeChild(lastItem);
});
