function nearestPalindrome(number) {
  function isPalindrome(num) {
    return num.toString() === num.toString().split("").reverse().join("");
  }

  if (isPalindrome(number)) {
    return number;
  }

  let i = 1;
  while (true) {
    if (isPalindrome(number + i)) {
      return number + i;
    } else if (isPalindrome(number - i)) {
      return number - i;
    }
    i += 1;
  }
}

console.log(nearestPalindrome(205));
console.log(nearestPalindrome(1001));
console.log(nearestPalindrome(433));
console.log(nearestPalindrome(755));
