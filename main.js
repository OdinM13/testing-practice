export function capitalize(word) {
  const firstLetter = word.slice(0, 1);
  const firstLetterCap = firstLetter.toUpperCase();
  const wordCap = firstLetterCap + word.slice(1); 
  return wordCap;
}

export function reverseString(word) {
  const wordArray = word.split('');
  const reversedArray = wordArray.reverse();
  return reversedArray.join('');
}

export const calculator = {
  add: (a, b) => a + b, 
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0) ? 'Dividing by zero is not possible' : (a / b)
}

export function caesarCipher (word, shift) {
  const wordLength = word.length;
  let codeArray = [];
  for (let i = 0; i < word.length; i++) {
    let codeAt = word.charCodeAt(i);
    if (codeAt >= 65 && codeAt <= 90) {
      let modifiedCode = codeAt + shift;
      if (modifiedCode > 90) {
        let correctedCode = modifiedCode - 26;
        codeArray.push(correctedCode);
      } else {
        codeArray.push(modifiedCode);
      }
    } else if (codeAt >= 97 && codeAt <= 122) {
      let modifiedCode = codeAt + shift;
      if (modifiedCode > 122) {
        let correctedCode = modifiedCode - 26;
        codeArray.push(correctedCode);
      } else {
        codeArray.push(modifiedCode);
      }
    } else {
      codeArray.push(codeAt);
    }
  }
  const caesarWord = String.fromCharCode(...codeArray);
  return caesarWord;
}

export function analyzeArray(arr) {
  return obj = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}
