let n = 17;
let primo = true;

for (let index = 2; index < n; index += 1) {
  if (!(n % index)) {
    primo = false;
    break;
  }
}

console.log(primo);
