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
// charCodeAt()
// fromCharCode()
}

export function analyzeArray(arr) {
  return obj = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}
