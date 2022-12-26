const r = Number(prompt("r:"));
const h = Number(prompt("h:"));

const volume = (r, h) => Math.PI * r * r * h;
console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`); // to fix the numbers to a certain number after comma
