// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function determineWordSize(word) {
  let wordArray = word.split('');
  return wordArray.length;
}

function indexOfBiggerWord(arrayOfWords) {
  let biggerValeu = determineWordSize(arrayOfWords[0]);
  let indexOfBigger = 0;
  for (let index = 1; index < arrayOfWords.length; index += 1) {
    if (determineWordSize(arrayOfWords[index]) > biggerValeu) {
      biggerValeu = determineWordSize(arrayOfWords[index]);
      indexOfBigger = index;
    }
  }
  return indexOfBigger;
}

let wordsArray = [
  'José',
  'Lucas',
  'Nádia',
  'Fernanda',
  'Cairo',
  'Joana',
  'Joanderson',
];
let indexBiggerWord = indexOfBiggerWord(wordsArray);
console.log(indexBiggerWord);
