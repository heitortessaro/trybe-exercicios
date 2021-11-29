let maxNumberOfSequence = 25;
let numberSequence = [];

for (let index = 0; index < maxNumberOfSequence; index++) {
  numberSequence[index] = index + 1;
}

for (let number of numberSequence) {
  console.log(number / 2);
}
