const {trataNumeros} = require('./tratanumeros');
const {randomNumber} = require('./randomNumber');

trataNumeros(randomNumber('a'),randomNumber(100),randomNumber(100))
  .then(result => console.log(`Result: ${result}`))
  .catch(err => console.log(`error: ${err}`));