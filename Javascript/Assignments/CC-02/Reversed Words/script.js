let words = ["little", "things", "make", "big", "days"];
let reversed = "";

for (let i = words.length - 1; i >= 0; i--) {
  reversed += words[i] + " ";
}

console.log(reversed.slice(0, reversed.length - 1));
