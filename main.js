export { capitalize };

function capitalize(word) {
  const firstLetter = word.slice(0, 1);
  const firstLetterCap = firstLetter.toUpperCase();
  const wordCap = firstLetterCap + word.slice(1); 
  return wordCap;
}
