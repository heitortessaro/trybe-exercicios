// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word

function verifyWordEnd(fullWord, endWord) {
  let wordArray = endWord.split('');
  let sizeEnd = wordArray.length;
  wordArray = fullWord.split('');
  let sizeFull = wordArray.length;
  for (let index = 0; index < sizeEnd; index += 1) {
    let char1 = endWord.charAt(sizeEnd - index - 1);
    let char2 = fullWord.charAt(sizeFull - index - 1);
    if (char1 !== char2) {
      return false;
    }
  }
  return true;
}

console.log(verifyWordEnd('trybe', 'ybe'));
