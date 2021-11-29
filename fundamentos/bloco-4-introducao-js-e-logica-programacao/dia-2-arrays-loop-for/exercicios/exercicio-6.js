let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberOfOddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) {
    numberOfOddNumbers += 1;
  }
}

if (numberOfOddNumbers > 0) {
  console.log(`The total of odd numbers is ${numberOfOddNumbers}.`);
} else {
  console.log('No odd number was found.');
}
