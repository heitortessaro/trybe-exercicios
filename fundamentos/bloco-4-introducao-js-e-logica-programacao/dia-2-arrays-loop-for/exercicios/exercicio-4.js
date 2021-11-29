let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

if (average > 20) {
  console.log('The value is greater then 20');
} else {
  console.log('The value is smaller or equal to 20');
}
