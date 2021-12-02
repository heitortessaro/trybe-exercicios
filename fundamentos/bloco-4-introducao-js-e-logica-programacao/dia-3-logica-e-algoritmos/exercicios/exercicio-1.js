// faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

// 1 - pega o tamanho
// 2 - roda um for com numero de reps = n
// 3 - roda um for para montar o conteúdo da linha (add em uma var)
// 4 - plota no console

let n = 5;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
  let conteudoLinha = '';
  for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
    conteudoLinha = conteudoLinha + '*';
  }
  console.log(conteudoLinha);
}
