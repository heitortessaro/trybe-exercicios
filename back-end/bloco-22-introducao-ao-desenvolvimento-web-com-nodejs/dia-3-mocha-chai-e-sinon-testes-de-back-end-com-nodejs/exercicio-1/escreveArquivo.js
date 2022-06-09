const fs = require('fs');

const escreveArquivo = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};

module.exports = {
  escreveArquivo,
}