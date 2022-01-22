// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumAllEven = (acc, number) => (number % 2 === 0) ? acc += number : acc;

const isEven = (number) => number % 2 === 0;
const sumAll = (acc, number) => acc + number;

console.log(`Somente com reduce: ${numbers.reduce(sumAllEven, 0)}`);
console.log(`Com reduce e filter: ${numbers.filter(isEven).reduce(sumAllEven, 0)}`);