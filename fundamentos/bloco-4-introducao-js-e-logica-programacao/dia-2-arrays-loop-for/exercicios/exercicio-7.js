let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let theSmallerNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (index === 0) {
    theSmallerNumber = numbers[index];
  } else if (numbers[index] < theSmallerNumber) {
    theSmallerNumber = numbers[index];
  }
}

console.log(`The smaller number is ${theSmallerNumber}`);
