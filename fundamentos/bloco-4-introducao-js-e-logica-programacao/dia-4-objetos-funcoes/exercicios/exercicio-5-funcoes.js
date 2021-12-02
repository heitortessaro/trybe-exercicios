// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

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

function determineMoreFrequentlyInt(intArray) {
  let tempObj = intArrayToObject(intArray);
  let bigNumberOfRepetitions = 0;
  let moreUsedKey = '';
  for (let key in tempObj) {
    if (tempObj[key] > bigNumberOfRepetitions) {
      bigNumberOfRepetitions = tempObj[key];
      moreUsedKey = key;
    }
  }
  return parseInt(moreUsedKey);
}

let inputArray = [2, 3, 2, 5, 8, 2, 3];
let moreFrequentNumber = determineMoreFrequentlyInt(inputArray);
console.log(moreFrequentNumber);
