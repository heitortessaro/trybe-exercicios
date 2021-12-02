// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexOfSmallerValue(arrayNumber) {
  let biggerValeu = arrayNumber[0];
  let indexOfBigger = 0;
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] > biggerValeu) {
      biggerValeu = arrayNumber[index];
      indexOfBigger = index;
    }
  }
  return indexOfBigger;
}

let inputArray = [2, 3, 6, 7, 10, 1, 1];
let indexBiggerValue = indexOfSmallerValue(inputArray);
console.log(indexBiggerValue);
