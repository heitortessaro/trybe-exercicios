const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checaRespostas = (gabarito, respostas) => {
    let numRespCorretas = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if (gabarito[index] === respostas[index]) {
            numRespCorretas += 1
        } else if (respostas[index] === "N.A") {

        } else {
            numRespCorretas -= 0.5;
        }
    }
    return numRespCorretas;
}

const defineNota = (gabarito, respostas, callback) => {
    return callback(gabarito, respostas);
}

console.log(defineNota(RIGHT_ANSWERS, STUDENT_ANSWERS, checaRespostas));

//  ------------------------

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));