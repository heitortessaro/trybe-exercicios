// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sumAll = (...numbers) => {
    return numbers.reduce((acc, numero) => acc + numero, 0);
}

console.log(sumAll(2, 3, 4, 5, 6, 7));