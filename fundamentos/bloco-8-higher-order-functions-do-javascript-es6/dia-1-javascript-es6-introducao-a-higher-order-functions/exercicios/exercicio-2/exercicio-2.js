const random = (max) => { return Math.floor(max * Math.random()) + 1 };

const checaSorteio = (numEsc, numGan) => numEsc === numGan;

const sorteio = (meuNumero, callback) => {
    const numGanhador = random(5);
    console.log(numGanhador);
    return callback(meuNumero, numGanhador) ? 'Dia de sorte, você ganhou!' : 'Hoje não foi seu dia =/.'
}

console.log(sorteio(2, checaSorteio));