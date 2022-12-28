"use strict";

const switchKey = document.querySelector(".switch-key");
const carLightOnOff = document.querySelector(".car");
const engineStartStop = document.querySelector(".engine");
const groundCar = document.querySelector(".ground-2");
const car = document.querySelector(".car");
const car2 = document.querySelector(".car2");

switchKey.addEventListener("click", function () {
  carLightOnOff.classList.toggle("hidden");
});

engineStartStop.addEventListener("click", function () {
  groundCar.classList.toggle("ground-2");
  car.classList.toggle("hop");
  car2.classList.toggle("hop");
});
