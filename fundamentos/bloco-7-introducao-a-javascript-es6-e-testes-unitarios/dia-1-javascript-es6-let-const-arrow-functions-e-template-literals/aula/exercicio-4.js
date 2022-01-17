const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const fraseParaPalavras = input => input.split(' ');

const maiorPalavra = input => {
    const palavras = fraseParaPalavras(input);
    let resultado = '';
    for  (let index = 0; index < palavras.length; index+=1){
        palavras[index].length > resultado.length ? resultado = palavras[index] : resultado = resultado;
    }

    return resultado;
}

console.log(`A maior palavra da frase é: ${maiorPalavra(frase)}.`)