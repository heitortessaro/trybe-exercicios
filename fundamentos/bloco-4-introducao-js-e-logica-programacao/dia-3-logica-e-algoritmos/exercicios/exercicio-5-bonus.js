// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;

if (!(n % 2)) {
  n = n + 1;
}

let posicaoCentral = Math.floor(n / 2);

for (let index = 0; index <= posicaoCentral; index += 1) {
  let conteudo = '';

  for (let indexAst = 0; indexAst < index * 2 + 1; indexAst += 1) {
    if (index < posicaoCentral) {
      if (indexAst === 0 || indexAst === index * 2) {
        conteudo = conteudo + '*';
      } else {
        conteudo = conteudo + ' ';
      }
    } else {
      conteudo = conteudo + '*';
    }
  }

  let tamanhoConteudo = conteudo.length;
  if (conteudo.length < n) {
    for (
      let numberSpace = 0;
      numberSpace < (n - tamanhoConteudo) / 2;
      numberSpace += 1
    ) {
      conteudo = ' ' + conteudo + ' ';
    }
  }
  console.log(conteudo);
}
