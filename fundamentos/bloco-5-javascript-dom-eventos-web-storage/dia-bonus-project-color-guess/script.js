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

const resposta = document.createElement('p');
resposta.id = 'answer';
resposta.innerText = 'Escolha uma cor';
espacoJogo.appendChild(resposta);

function verificaCor(event) {
 if (event.target.classList.contains('escolha-correta')) {
  resposta.innerText = 'Acertou! Parabéns!';
  incrementaPontuacao();
  // timeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => {
   gerenciaJogo();
  }, 3000);
  return;
 }
 resposta.innerText = 'Errou! Tente novamente!';
 setTimeout(() => {
  resposta.innerText = 'Escolha uma cor';
 }, 2000);
}

// Requisito 3 - 4 - 5
const colorsSec = document.createElement('section');
colorsSec.id = 'secao-cores-apresentadas';
espacoJogo.appendChild(colorsSec);

const mainColor = document.createElement('div');
mainColor.id = 'mainColor';
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
  tempDiv.classList.add('ball-help');
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

function posiciona(quantidade) {
 // origin: https://codepen.io/dbpas/pen/LGudb
 const tipo = 1; //circle type - 1 whole, 0.5 half, 0.25 quarter
 const raio = '170px'; //distance from center
 const start = -90; //shift start from 0
 // $elements = $('li:not(:first-child)'),
 // numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
 // const slice = 360 * type / numberOfElements;
 const pedaco = (360 * tipo) / quantidade;
 for (
  let indexPosi = 0;
  indexPosi < asideColors.childElementCount;
  indexPosi += 1
 ) {
  let rotate = pedaco * indexPosi + start;
  let rotateReverse = rotate * -1;
  asideColors.children[
   indexPosi
  ].style.transform = `rotate(${rotate}deg) translate(${raio}) rotate(${rotateReverse}deg)`;
  // asideColors.children[indexPosi].style.transform = `translate(${raio})`;
  // asideColors.children[
  //  indexPosi
  // ].style.transform = `rotate(${rotateReverse}deg)`;
 }
}

function adicionaDivsComCor(quantidade) {
 const correta = Math.floor(quantidade * Math.random());
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
 posiciona(quantidade);
}

const numeroOpcoes = 10;
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
iniciaJogo.innerText = 'Novo Jogo';
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
