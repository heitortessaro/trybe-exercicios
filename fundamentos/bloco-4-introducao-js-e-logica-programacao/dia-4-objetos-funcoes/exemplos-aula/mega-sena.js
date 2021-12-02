//Math.floor -> round downwards the number.
//Math.ramdom -> gives randon number in the interval 0-1. bu never 1.

//generate random numbers between 1 and 60
// randomNumber = Math.floor(Math.random()*60 + 1);
function generateNumber(maxValue) {
  return Math.floor(Math.random() * maxValue + 1);
}

function generateGame(numberOfNumbers, maxValue) {
  let gameNumbers = [];
  for (let index = 0; index < numberOfNumbers; index += 1) {
    let test = 1;
    while (test) {
      let tempNumber = generateNumber(maxValue);
      if (!gameNumbers.includes(tempNumber)) {
        gameNumbers[index] = tempNumber;
        test = 0;
      }
    }
  }
  return gameNumbers;
}

function checkGame(winner, user) {
  let corectNumbers = [];
  let message;
  for (let indexUser = 0; indexUser < user.length; indexUser += 1) {
    for (let indexWinner = 0; indexWinner < winner.length; indexWinner += 1) {
      if (user[indexUser] === winner[indexWinner]) {
        corectNumbers.push(user[indexUser]);
      }
    }
  }
  if (corectNumbers.length === 6) {
    message = 'Parabéns, você ganhou!!!!';
  } else {
    message = 'Que pena, como esperado você perdeu =(';
  }
  return [corectNumbers, message];
}

let winnerNumbers = generateGame(6, 60);
let userNumbers = [7, 14, 49, 30, 60, 42];
let [userCorrectNumbers, result] = checkGame(winnerNumbers, userNumbers);

console.log(`Winner numbers: ${userNumbers}`);
console.log(`Winner numbers: ${winnerNumbers}`);
console.log(`Correct numbers: ${userCorrectNumbers}`);
console.log(result);
