//No tabuleiro de xadrez estão duas peças, a raínha e o bispo. O objetivo é dizer se a raínha consegue atacar o bispo dada a atual disposição das peças no tabuleiro.

// como representar a posição das peças?
// R.: Utilizar dois arrays representando a posição na coluna e na linha para cada peça
// no caso o instrutor prefiriu utilizar 4 variaveis

let queenRow = 5;
let queenColumn = 4;
let opponentRow = 5;
let opponentColumn = 5;

let canAttack = false;

let rowDistance = Math.abs(queenRow - opponentRow);
let columnDistance = Math.abs(queenColumn - opponentColumn);

if (
  queenRow === opponentRow ||
  queenColumn === opponentColumn ||
  rowDistance === columnDistance
) {
  canAttack = true;
}

// for (let index = 0; index < 7; index += 1) {
//   //checa diagonal sup direita
//   if (
//     queenColumn + index === opponentColumn &&
//     queenRow + index === opponentRow
//   ) {
//     canAttack = true;
//   }
//   //checa diagonal inf esquerda
//   if (
//     queenColumn - index === opponentColumn &&
//     queenRow - index === opponentRow
//   ) {
//     canAttack = true;
//   }
//   //checa diagonal sup esquerda
//   if (
//     queenColumn - index === opponentColumn &&
//     queenRow + index === opponentRow
//   ) {
//     canAttack = true;
//   }
//   //checa diagonal inf direita
//   if (
//     queenColumn + index === opponentColumn &&
//     queenRow - index === opponentRow
//   ) {
//     canAttack = true;
//   }
// }

// outra solução é verificar se a distância da coluna e da linha entre as duas peças são igua. Se forem eles estão na mesma diagonal

console.log('A rainha pode atacar?:', canAttack);
