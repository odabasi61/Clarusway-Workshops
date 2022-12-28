let str = prompt("Please enter a word or a number to see if it is palindrome");

function isPalindrome(str) {
  // First, we'll use the toLowerCase() method to make the string all lower case
  // This is so that the comparison is case-insensitive
  str = str.toLowerCase();

  // Next, we'll use the replace() method to remove any non-alphanumeric characters from the string
  // This is so that the comparison is not affected by punctuation or spaces
  str = str.replace(/[^a-z0-9]/g, "");

  // Now we'll use the split() and reverse() methods to create a reversed version of the string
  // The split() method splits the string into an array of characters, and the reverse() method reverses the array
  let reversed = str.split("").reverse().join("");

  // Finally, we'll compare the original string to the reversed string
  // If they are equal, then the string is a palindrome and we return true
  // Otherwise, the string is not a palindrome and we return false
  return str === reversed;
}

console.log(isPalindrome(str));
