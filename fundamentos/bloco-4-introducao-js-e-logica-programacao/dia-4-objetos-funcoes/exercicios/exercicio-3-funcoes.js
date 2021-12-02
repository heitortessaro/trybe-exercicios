// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexOfSmallerValue(arrayNumber) {
  let smallerValeu = arrayNumber[0];
  let indexOfSmaller = 0;
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < smallerValeu) {
      smallerValeu = arrayNumber[index];
      indexOfSmaller = index;
    }
  }
  return indexOfSmaller;
}

let inputArray = [2, 4, 6, 7, 10, 0, 10, -3];
let indexSmallerValue = indexOfSmallerValue(inputArray);
console.log(indexSmallerValue);
