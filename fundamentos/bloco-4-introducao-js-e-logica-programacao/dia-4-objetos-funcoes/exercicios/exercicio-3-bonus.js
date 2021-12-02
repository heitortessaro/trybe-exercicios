// A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

function ArrayToObject(intArray) {
  let tempObj = {};
  for (let index = 0; index < intArray.length; index += 1) {
    let key = intArray[index];
    // dica retirada de https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
    if (!(key in tempObj)) {
      tempObj[key] = 1;
    } else {
      tempObj[key] = 1 + tempObj[key];
    }
  }
  return tempObj;
}

const basket = [
  'Melancia',
  'Abacate',
  'Melancia',
  'Melancia',
  'Uva',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Uva',
  'Laranja',
  'Melancia',
  'Banana',
  'Uva',
  'Pera',
  'Abacate',
  'Laranja',
  'Abacate',
  'Banana',
  'Melancia',
  'Laranja',
  'Laranja',
  'Jaca',
  'Uva',
  'Banana',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Uva',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Melancia',
  'Melancia',
  'Laranja',
  'Pera',
  'Banana',
  'Jaca',
  'Laranja',
  'Melancia',
  'Abacate',
  'Abacate',
  'Pera',
  'Melancia',
  'Banana',
  'Banana',
  'Abacate',
  'Uva',
  'Laranja',
  'Banana',
  'Abacate',
  'Uva',
  'Uva',
  'Abacate',
  'Abacate',
  'Melancia',
  'Uva',
  'Jaca',
  'Uva',
  'Banana',
  'Abacate',
  'Banana',
  'Uva',
  'Banana',
  'Laranja',
  'Laranja',
  'Jaca',
  'Jaca',
  'Abacate',
  'Jaca',
  'Laranja',
  'Melancia',
  'Pera',
  'Jaca',
  'Melancia',
  'Uva',
  'Abacate',
  'Jaca',
  'Jaca',
  'Abacate',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Jaca',
  'Pera',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Jaca',
  'Banana',
  'Laranja',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Uva',
];

let fruits = ArrayToObject(basket);
let info1 = 'Sua cesta possui: ';
for (let key in fruits) {
  info1 = info1 + ' ' + fruits[key] + ' ' + key + 's,';
}
// https://flaviocopes.com/how-to-remove-last-char-string-js/
let info2 = info1.slice(0, -1);
info2 += '.';

console.log(info2);
