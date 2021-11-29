let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicationResults = [];

for (let index = 0; index < numbers.length; index += 1) {
  let numb1 = numbers[index];
  let numb2;
  if (index === numbers.length - 1) {
    numb2 = 2;
  } else {
    numb2 = numbers[index + 1];
  }
  multiplicationResults.push(numb1 * numb2);
}

console.log(multiplicationResults);
