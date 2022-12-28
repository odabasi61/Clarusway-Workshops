const celcius = Number(
  prompt("Please enter a celcius degree to see its fahrenheit equivalent")
);

const celciusToFahrenheit = (celcius) => {
  return celcius * (9 / 5) + 32;
};
console.log(`${celcius} °C equals to ${celciusToFahrenheit(celcius)} °F.`);
