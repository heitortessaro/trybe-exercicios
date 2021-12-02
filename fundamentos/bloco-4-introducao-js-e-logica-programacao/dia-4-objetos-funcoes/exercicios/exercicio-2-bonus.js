// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(inputarray) {
  let evenArray = [];
  for (let indexMain = 0; indexMain < inputarray.length; indexMain += 1) {
    for (
      let indexSub = 0;
      indexSub < inputarray[indexMain].length;
      indexSub += 1
    ) {
      if (!(inputarray[indexMain][indexSub] % 2)) {
        evenArray.push(inputarray[indexMain][indexSub]);
      }
    }
  }
  return evenArray;
}

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

let evenVector = arrayOfNumbers(vector);

console.log(evenVector);
