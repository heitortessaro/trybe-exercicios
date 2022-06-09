const {numerosNaturais} = require('./numerosNaturais');
const {escreveArquivo} = require('./escreveArquivo');

console.log(numerosNaturais(-1));
const status = escreveArquivo('Teste','Teste conteúdo');
console.log(status);
