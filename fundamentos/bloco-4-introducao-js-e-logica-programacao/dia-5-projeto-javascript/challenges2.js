// Desafio 10
function techList(ArrayTech, name) {
  // check if array is empty -> https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/
  if (ArrayTech.length === 0) {
    return 'Vazio!';
  }
  // doc about sort method -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  ArrayTech.sort();
  // let nome = name;
  let arrayOfObjs = [];
  for (let index = 0; index < ArrayTech.length; index += 1) {
    let tempObj = {
      tech: ArrayTech[index],
      name,
    };
    arrayOfObjs[index] = tempObj;
  }
  return arrayOfObjs;
}

// Desafio 11
function intArrayToObject(intArray) {
  let tempObj = {};
  for (let index = 0; index < intArray.length; index += 1) {
    let key = intArray[index].toString();
    // dica retirada de https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
    if (!(key in tempObj)) {
      tempObj[key] = 1;
    } else {
      tempObj[key] = 1 + tempObj[key];
    }
  }
  return tempObj;
}

function checkNumbers(inputArray) {
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index] > 9 || inputArray[index] < 0) {
      return false;
    }
  }
  return true;
}

function checkRepetition(inputArray) {
  let arrayObject = intArrayToObject(inputArray);
  for (let key in arrayObject) {
    if (arrayObject[key] > 2) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(inputArray) {
  let n = inputArray;
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!checkNumbers(n) || !checkRepetition(n)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumCB = lineC + lineB;
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difCB = Math.abs(lineC - lineB);

  if (
    lineC < sumAB &&
    lineB < sumAC &&
    lineA < sumCB &&
    lineC > difAB &&
    lineB > difAC &&
    lineA > difCB
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(inputString) {
  // extract number from string using match and regular expressions -> https://www.youtube.com/watch?v=pfkkdzeyx6U
  // 1 - what is inside /..../ is the regular expression
  // 2 - \d+ -> look for number (they may be more than one)
  // 3 - g -> search globally

  // match doc -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  let reg = /\d+/g;
  let numbers = inputString.match(reg);
  let waterCups = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    waterCups += parseInt(numbers[index]);
  }
  if (waterCups > 1) {
    return `${waterCups} copos de água`;
  }
  return `${waterCups} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
