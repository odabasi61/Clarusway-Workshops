let str = prompt("Write something and get it reversed");

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString(str));
