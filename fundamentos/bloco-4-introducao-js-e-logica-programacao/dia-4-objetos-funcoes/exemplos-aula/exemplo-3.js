function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function returnTheBiggerNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return 'The numbers are equal';
  }
}

function returnTheBiggerOf3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return 'The numbers are equal';
  }
}

function checkPositiveNegative(a) {
  if (a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkIfIsTriangle(a, b, c) {
  let validAngles = a > 0 && b > 0 && c > 0;
  let totalAngle = a + b + c;

  if (validAngles) {
    if (totalAngle === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Some of the angles are not valid (negative)';
  }
}

console.log(checkIfIsTriangle(60, 60, -60));
