//Math.floor -> round downwards the number.
//Math.ramdom -> gives randon number in the interval 0-1. bu never 1.

//generate random numbers between 1 and 60
// randomNumber = Math.floor(Math.random()*60 + 1);
let winnerNumbers = [];
let sharedNumbers = [];
let userNumbers = [7, 14, 49, 30, 60, 42];
let result;

for (let index = 0; index < 6; index += 1) {
  let test = 1;
  while (test) {
    let tempNumber = Math.floor(Math.random() * 60 + 1);
    if (!winnerNumbers.includes(tempNumber)) {
      winnerNumbers[index] = tempNumber;
      test = 0;
    }
  }
}

for (let indexUser = 0; indexUser < userNumbers.length; indexUser += 1) {
  for (
    let indexWinner = 0;
    indexWinner < winnerNumbers.length;
    indexWinner += 1
  ) {
    if (userNumbers[indexUser] === winnerNumbers[indexWinner]) {
      sharedNumbers.push(userNumbers[indexUser]);
    }
  }
}

if (sharedNumbers.length === 6) {
  result = 'Parabéns, você ganhou!!!!';
} else {
  result = 'Que pena, como esperado você perdeu =(';
}

console.log(`Winner numbers: ${userNumbers}`);
console.log(`Winner numbers: ${winnerNumbers}`);
console.log(`Shared numbers: ${sharedNumbers}`);
console.log(result);
