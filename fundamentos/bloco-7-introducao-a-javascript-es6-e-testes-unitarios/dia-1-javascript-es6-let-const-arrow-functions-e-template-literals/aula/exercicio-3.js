const valor = 5;

const fatorial = valorInicial =>  {
    let resultadoFatorial = 1;
    for (let index = 1; index <= valorInicial; index+= 1){
        resultadoFatorial = resultadoFatorial * index;
    }
    return resultadoFatorial;
}

console.log(`O resultado do fatorial de ${valor} é igual à ${fatorial(valor)}.`)

// Recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(`O resultado do fatorial de ${valor} é igual à ${factorial(valor)}.`);