// Faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

// 1 - pega o tamanho;
// 2 - o tamanho deve ser impar
// 3 - se for par -> soma 1
// 4 - cria var conteudo com 'espaços em branco' do tamanho n
// 5 - define a posicao central (ceil(length/2) - 1)
// 6 - o indice da posicao central é o número de iterações do loop for
// 7 - a cada iteração o index é usado para deslocar em relacao ao centro e substituir o espaço pelo *
//     https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
//     return 'cat'[1]; // returns "a"

let n = 8;

if (!(n % 2)) {
  n = n + 1;
}

let conteudo = '';

// for (let index = 0; index < n; index += 1) {
//   conteudo = conteudo + ' ';
// }

let posicaoCentral = Math.floor(n / 2);

for (let index = 0; index <= posicaoCentral; index += 1) {
  conteudo = '';
  for (let numberAst = 0; numberAst < index * 2 + 1; numberAst += 1) {
    conteudo = conteudo + '*';
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
