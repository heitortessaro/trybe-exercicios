// Agora inverta o lado do triângulo
// n = 5

//     *
//    **
//   ***
//  ****
// *****

// 1 - pega o tamanho
//          esse é o tamanho padrao de todas as linhas
// 2 - define variável conteudo contendo um numero de 'espaços em branco' igual ao tamanho (usa for)
// 3 - roda um for com numero de reps = n
// 4 - a cada iteracao retira o primeiro caracter da variável conteúdo
// -> https://stackoverflow.com/questions/4564414/delete-first-character-of-a-string-in-javascript
// 5 - depois insere ao final o *
// 6 - plota no console ao fim de cada loop

n = 5;

let conteudo = '';

for (let index = 0; index < n; index += 1) {
  conteudo = conteudo + ' ';
}

for (let index = 0; index < n; index += 1) {
  conteudo = conteudo.substring(1);
  conteudo = conteudo + '*';
  console.log(conteudo);
}
