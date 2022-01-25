// Some os valores

const sumAll = (valorInicial = 0, ...numbers) => {
    return numbers.reduce((acc, number) => acc + number, valorInicial)
}

console.log(sumAll())