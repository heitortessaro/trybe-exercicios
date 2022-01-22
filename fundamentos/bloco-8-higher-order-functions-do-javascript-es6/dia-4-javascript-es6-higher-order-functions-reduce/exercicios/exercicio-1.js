// Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(acc, arr, index, fullArray) {
    return acc.concat(arr);
}

console.log(arrays.reduce(flatten));