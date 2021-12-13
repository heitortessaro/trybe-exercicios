// Elementos
const title = document.getElementById('title');
const espacoJogo = document.getElementById('espaco-jogo');

// adiciona elementos

// Requisito 2
function randomColor(comRGB) {
 const randRed = Math.floor(256 * Math.random());
 const randGreen = Math.floor(256 * Math.random());
 const randBlue = Math.floor(256 * Math.random());
 if (comRGB) {
  return `rgb(${randRed}, ${randGreen}, ${randBlue})`;
 }
 //  return `(${randRed}, ${randGreen}, ${randBlue})`;
 return [randRed, randGreen, randBlue];
}

// Requisito 5
// método string includes: https://www.w3schools.com/jsref/jsref_includes.asp
// function verificaCor(event) {
//   const divColor = event.target.style.backgroundColor;
//   if (divColor.includes(rgbColorText)) {
//     console.log('correto');
//     return;
//   }
//   console.log('incorreto');
// }
const resposta = document.createElement('p');
resposta.id = 'answer';
resposta.innerText = 'Escolha uma cor';
espacoJogo.appendChild(resposta);

function verificaCor(event) {
 if (event.target.classList.contains('escolha-correta')) {
  resposta.innerText = 'Acertou!';
  incrementaPontuacao();
  return;
 }
 resposta.innerText = 'Errou! Tente novamente!';
}

// Requisito 3 - 4 - 5
const colorsSec = document.createElement('section');
colorsSec.id = 'secao-cores-apresentadas';
espacoJogo.appendChild(colorsSec);

const mainColor = document.createElement('div');
colorsSec.appendChild(mainColor);

const asideColors = document.createElement('aside');
colorsSec.appendChild(asideColors);

const rgbColorText = document.createElement('p');
rgbColorText.id = 'rgb-color';
let mainColors = randomColor(false);
rgbColorText.innerText = `(${mainColors[0]}, ${mainColors[1]}, ${mainColors[2]})`;
// rgbColorText.innerText = randomColor(false);
mainColor.appendChild(rgbColorText);
mainDivsColor(mainColors);

function mainDivsColor(mainColors) {
 while (mainColor.childElementCount > 1) {
  mainColor.lastElementChild.remove();
 }
 for (let index = 0; index < 3; index += 1) {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('ball');
  switch (index) {
   case 0:
    tempDiv.style.backgroundColor = `rgb(${mainColors[index]},0,0)`;
    mainColor.appendChild(tempDiv);
    break;
   case 1:
    tempDiv.style.backgroundColor = `rgb(0,${mainColors[index]},0)`;
    mainColor.appendChild(tempDiv);
    break;
   case 2:
    tempDiv.style.backgroundColor = `rgb(0,0,${mainColors[index]})`;
    mainColor.appendChild(tempDiv);
    break;
   default:
    break;
  }
 }
}

function adicionaDivsComCor(quantidade) {
 const correta = Math.floor(6 * Math.random());
 for (let index = 0; index < quantidade; index += 1) {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('ball');
  if (index === correta) {
   tempDiv.style.backgroundColor = 'rgb'.concat(rgbColorText.innerText);
   tempDiv.classList.add('escolha-correta');
  } else {
   tempDiv.style.backgroundColor = randomColor(true);
  }
  tempDiv.addEventListener('click', verificaCor);
  asideColors.appendChild(tempDiv);
 }
}

const numeroOpcoes = 6;
adicionaDivsComCor(numeroOpcoes);

// Requisito 6
function removeDivs() {
 while (asideColors.lastChild) {
  asideColors.lastChild.remove();
 }
}

function gerenciaJogo() {
 mainColors = randomColor(false);
 mainDivsColor(mainColors);
 rgbColorText.innerText = `(${mainColors[0]}, ${mainColors[1]}, ${mainColors[2]})`;
 //  rgbColorText.innerText = randomColor(false);
 removeDivs();
 adicionaDivsComCor(numeroOpcoes);
 resposta.innerText = 'Escolha uma cor';
}

const iniciaJogo = document.createElement('button');
iniciaJogo.id = 'reset-game';
iniciaJogo.innerText = 'Inicia / Reinicia Game';
iniciaJogo.addEventListener('click', gerenciaJogo);
espacoJogo.firstElementChild.before(iniciaJogo);

// Requisito 7
const scoreInfo = document.createElement('p');
scoreInfo.id = 'scoreInfo';
scoreInfo.innerText = 'A sua pontuação é: ';
espacoJogo.firstElementChild.after(scoreInfo);

const score = document.createElement('span');
score.id = 'score';
score.innerText = '0';
scoreInfo.appendChild(score);

function incrementaPontuacao() {
 const pontuacaoAtual = parseInt(score.innerText, 10);
 score.innerText = pontuacaoAtual + 3;
}
