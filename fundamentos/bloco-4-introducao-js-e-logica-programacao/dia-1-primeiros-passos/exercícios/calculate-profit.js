let productCost = 100;
let sellingPrice = 130;
let arePositive = productCost > 0 && sellingPrice > 0;

if (arePositive) {
  let profit = (sellingPrice - productCost * 1.2) * 1000;
  console.log(`Profit from selling 1000 units is: ${profit}`);
} else {
  console.log('Invalid input values.');
}
