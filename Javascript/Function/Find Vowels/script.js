const vowel = prompt("Write something and get the vowels.");

const getVowel = (vowel) => {
  let vowelsCount = 0;
  const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  for (let char of vowel) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};
console.log(`There is/are ${getVowel(vowel)} vovels in this word/sentence.`);
