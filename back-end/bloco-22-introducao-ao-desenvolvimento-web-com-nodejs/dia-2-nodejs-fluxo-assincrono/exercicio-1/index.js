const {trataNumeros} = require('./tratanumeros');
const {randomNumber} = require('./randomNumber');

trataNumeros(randomNumber('a'),randomNumber(100),randomNumber(100))
  .then(result => console.log(`Result: ${result}`))
  .catch(err => console.log(`error: ${err}`));


async function teste(num1, num2, num3) {
  try {
    const result = await trataNumeros(num1, num2, num3);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

teste(randomNumber(10),randomNumber(10),randomNumber(10));