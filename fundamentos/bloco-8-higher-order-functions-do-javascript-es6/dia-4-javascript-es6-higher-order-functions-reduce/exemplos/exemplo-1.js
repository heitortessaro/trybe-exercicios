// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . 

const numbers = [50, 85, -30, 3, 15];

const getBiggerFor = (arr) => {
    let biggerNumber = arr[0];
    for (let index = 1; index < arr.length; index += 1) {
        arr[index] > biggerNumber ?
            biggerNumber = arr[index] :
            biggerNumber = biggerNumber;
    }
    return biggerNumber;
}

const getBigger = (acc, number) => acc > number ? acc : number;

console.log(`Com for ${getBiggerFor(numbers)}`);
console.log(`Com reduce ${numbers.reduce(getBigger)}`);
