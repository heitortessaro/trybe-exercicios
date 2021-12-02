// Faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

// 1 - pega o tamanho;
// 2 - o tamanho deve ser impar
// 3 - se for par -> soma 1
// x (NAO UTILIZADO) - cria var conteudo com 'espaços em branco' do tamanho n
// 5 - define a posicao central (ceil(length/2) - 1)
// 6 - o indice da posicao central é o número de iterações do loop for
// X (NAO UTILIZADO) - a cada iteração o index é usado para deslocar em relacao ao centro e substituir o espaço pelo *
// -> In JavaScript, strings are immutable, which means the best you can do is to create a new string with the changed content and assign the variable to point to it. https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript

// 7 - a cada iteração do loop a var conteudo é ressetada.
// 8 - o número de * adicionados é igual a index*2+1 (forma triangulo) a cada iteracao
// 9 - define o tamanho de conteudo para saber quantos espaços inserir
// 10 - Novo for, a cada iteração um espaço em cada lado da string conteudo é adicionado. Repete até ter o mesmo tamanho que n;
// 11 - plota no console a linha processada.

let n = 8;

if (!(n % 2)) {
  n = n + 1;
}

let conteudo = '';

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
