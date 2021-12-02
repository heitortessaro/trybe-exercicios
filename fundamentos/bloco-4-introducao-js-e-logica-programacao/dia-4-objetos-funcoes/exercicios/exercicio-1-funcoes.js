// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function reverseWord(word) {
  let wordArray = word.split('');
  wordArray = wordArray.reverse();
  return wordArray.join('');
}

function verifyPalindrome(word) {
  let reversedWord = reverseWord(word);
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPalindrome('casa'));
