// salário bruto
let grossSalary = 3000.0;
// salário base (bruto - INSS)
let baseSalary;
// salário líquido (base - IR)
let netSalary;

if (grossSalary <= 1556.94) {
  baseSalary = grossSalary - grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  baseSalary = grossSalary - grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  baseSalary = grossSalary - grossSalary * 0.11;
} else {
  baseSalary = grossSalary - 570.88;
}

if (baseSalary <= 1903.98) {
  netSalary = baseSalary;
} else if (baseSalary <= 2826.65) {
  netSalary = baseSalary - (baseSalary * 0.075 - 142.8);
} else if (baseSalary <= 3751.05) {
  netSalary = baseSalary - (baseSalary * 0.15 - 354.8);
} else if (baseSalary <= 4664.68) {
  netSalary = baseSalary - (baseSalary * 0.225 - 636.13);
} else {
  netSalary = baseSalary - (baseSalary * 0.275 - 869.36);
}

console.log(`The net salary is: R$ ${netSalary}`);
