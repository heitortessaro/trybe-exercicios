let a = 60;
let b = 60;
let c = -60;

let validAngles = a > 0 && b > 0 && c > 0;
let totalAngle = a + b + c;

if (validAngles) {
  if (totalAngle === 180) {
    console.log('True');
  } else {
    console.log('False');
  }
} else {
  console.log('Some of the angles are not valid (negative)');
}
