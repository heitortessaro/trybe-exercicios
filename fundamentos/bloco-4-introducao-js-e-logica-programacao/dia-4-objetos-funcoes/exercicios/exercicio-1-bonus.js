// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

// IDEIA:
// recebe o string com números
// separa por posição
// roda para duas letras
//      inicia da esquerda [0] para direita
//      se a combinação de duas letras não corresponde a uma key
//          usa apensas a primeira

let romanNumbers = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

let input = 'MCDLVIII';

function convertToNumber(number) {
  let numberArray = number.split('');
  let index = 0;
  let sum = 0;
  while (index < numberArray.length) {
    if (index + 1 === numberArray.length) {
      sum = sum + romanNumbers[numberArray[index]];
      index += 1;
    } else {
      if (checkSequence(numberArray[index], numberArray[index + 1])) {
        let key = numberArray[index] + numberArray[index + 1];
        sum = sum + romanNumbers[key];
        index += 2;
      } else {
        sum = sum + romanNumbers[numberArray[index]];
        index += 1;
      }
    }
  }
  return sum;
}

function checkSequence(position1, position2) {
  let tempString = position1 + position2;
  if (tempString in romanNumbers) {
    return true;
  } else {
    return false;
  }
}

let normalNumber = convertToNumber(input);
console.log(normalNumber);

// console.log('II' in romanNumbers);
