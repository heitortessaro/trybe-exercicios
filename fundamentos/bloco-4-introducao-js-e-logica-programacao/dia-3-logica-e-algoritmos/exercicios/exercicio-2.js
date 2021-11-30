//  faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// 1 - pega o tamanho
// 2 - roda um for com numero de reps = n
// 3 - monta o conteúdo da linha de forma progressiva (a var é reutilizada)
// 4 - plota no console ao fim de cada loop

n = 5;

let conteudo = '';

for (let index = 0; index < n; index += 1) {
  conteudo = conteudo + '*';
  console.log(conteudo);
}
