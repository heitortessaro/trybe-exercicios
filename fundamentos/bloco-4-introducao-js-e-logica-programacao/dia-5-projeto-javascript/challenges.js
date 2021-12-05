// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, high) {
  return (base * high) / 2;
}

// Desafio 3
function splitSentence(inputString) {
  return inputString.split(' ');
}

// Desafio 4
function concatName(inputArray) {
  let name = `${inputArray[inputArray.length - 1]}, ${inputArray[0]}`;
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(inputArray) {
  let biggerValue = inputArray[0];
  let numberOfRepetitions = 1;
  for (let index = 1; index < inputArray.length; index += 1) {
    if (inputArray[index] > biggerValue) {
      biggerValue = inputArray[index];
      numberOfRepetitions = 1;
    } else if (inputArray[index] === biggerValue) {
      numberOfRepetitions += 1;
    }
  }
  return numberOfRepetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(inputArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < inputArray.length; index += 1) {
    if (!(inputArray[index] % 3) && !(inputArray[index] % 5)) {
      fizzBuzzArray[index] = 'fizzBuzz';
    } else if (!(inputArray[index] % 3)) {
      fizzBuzzArray[index] = 'fizz';
    } else if (!(inputArray[index] % 5)) {
      fizzBuzzArray[index] = 'buzz';
    } else {
      fizzBuzzArray[index] = 'bug!';
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(inputString) {
  let stringArray = inputString.split('');
  let inputEncode = ['a', 'e', 'i', 'o', 'u'];
  let outputEncode = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < inputEncode.length; index += 1) {
    let indexTest = 1;
    let letter = inputEncode[index];
    let number = outputEncode[index];
    while (indexTest >= 0) {
      indexTest = stringArray.indexOf(letter);
      stringArray[indexTest] = number;
    }
  }
  return stringArray.join('');
}

// let teste = 'hi there!';
// // let testeLetra = 'i';
// // let teste3 = teste.indexOf(testeLetra);
// // console.log(teste3);
// // let vetor = teste.split('');
// // vetor[teste3] = '3';
// // console.log(vetor);
// let teste2 = encode(teste);
// console.log(teste2);

function decode(inputString) {
  let stringArray = inputString.split('');
  let inputEncode = ['1', '2', '3', '4', '5'];
  let outputEncode = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < inputEncode.length; index += 1) {
    let indexTest = 1;
    let letter = inputEncode[index];
    let number = outputEncode[index];
    while (indexTest >= 0) {
      indexTest = stringArray.indexOf(letter);
      stringArray[indexTest] = number;
    }
  }
  return stringArray.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
