// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function returnSumOfNumbers(max) {
  let sum = 0;
  for (let index = 1; index <= max; index += 1) {
    sum += index;
  }
  return sum;
}

let n = 5;
console.log(returnSumOfNumbers(n));
