// get elements
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

// create elements
const title = document.createElement('h1');
title.innerText = 'Mistery Letter';

const inputText = document.createElement('input');
inputText.id = 'carta-texto';
inputText.placeholder = 'add your text here';

const outputText = document.createElement('p');
outputText.id = 'carta-gerada';

const btnCreate = document.createElement('button');
btnCreate.innerText = 'Create Letter';
btnCreate.id = 'criar-carta';

const wordCounter = document.createElement('p');
wordCounter.id = 'carta-contador';

// add elements
header.appendChild(title);

main.appendChild(inputText);

main.appendChild(btnCreate);

main.appendChild(outputText);

main.appendChild(wordCounter);

// const color = ['empty', 'newspaper', 'magazine1', 'magazine2'];
// const size = ['empty', 'medium', 'big', 'reallybig'];
// const transform = [
//   'empty',
//   'rotateleft',
//   'rotateright',
//   'skewleft',
//   'skewright',
// ];

const color = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const trasnfRott = ['rotateleft', 'rotateright'];
const transfSkew = ['skewleft', 'skewright'];

const fonts = [
 'Courier New',
 'Courier',
 'monospace',
 'Franklin Gothic Medium',
 'Arial Narrow',
 'Arial',
 'sans-serif',
 'Gill Sans',
 'Gill Sans MT',
 'Calibri',
 'Trebuchet MS',
 'Lucida Sans',
 'Lucida Sans Regular',
 'Lucida Grande',
 'Lucida Sans Unicode',
 'Geneva',
 'Verdana',
 'Times New Roman',
 'Times',
 'serif',
];

const backgroundImages = [
 'jornal-01.jpg',
 'jornal-02.jpg',
 'jornal-03.jpg',
 'jornal-04.jpg',
 'paper-01.jpg',
 'paper-02.jpeg',
 'pink-pattern.png',
];

// functions

// passos req 3:
// pega o texto do input
// separa o texto utilizando o espaço
// será gerado um array;
// roda um loop que depende do size do array gerado
// a cada iteracao gera um elemento span
// adiciona o texto da posicao do array ao span
// adiciona uma classe aleatoria a cada span
// faz o append no outputText

function selectRandonFontSize(max, min) {
 const delta = max - min;
 const fontSize = Math.floor(delta * Math.random() + min);
 return `${fontSize}px`;
}

function counterWords() {
 const numberWords = outputText.childElementCount;
 wordCounter.innerText = `${numberWords}`;
}

function selectRandom(max) {
 const position = Math.floor(max * Math.random());
 return position;
}

function selectBackgroundImage() {
 const img = backgroundImages[selectRandom(backgroundImages.length)];
 return "url('./images/" + img + "')";
}

function changeStyle(event) {
 const element = event.target;
 element.className = '';
 //   element.classList.add('word');
 element.classList.add(color[selectRandom(color.length)]);
 element.classList.add(size[selectRandom(size.length)]);
 element.classList.add(trasnfRott[selectRandom(trasnfRott.length)]);
 element.classList.add(transfSkew[selectRandom(transfSkew.length)]);
 element.style.fontFamily = fonts[selectRandom(fonts.length)];
 element.style.fontSize = selectRandonFontSize(45, 15);
 element.style.backgroundImage = selectBackgroundImage();
}

function checkEmptyInput(text) {
 if (text === '') {
  return true;
 }
 return false;
}

function checkOnlySpaces(inputArray) {
 for (let index = 0; index < inputArray.length; index += 1) {
  if (inputArray[index] !== '') {
   return false;
  }
 }
 return true;
}

function removeSpans() {
 while (outputText.lastChild) {
  outputText.lastChild.remove();
 }
}

function generateSpans(inputArray) {
 for (let index = 0; index < inputArray.length; index += 1) {
  const tempSpan = document.createElement('span');
  tempSpan.innerText = inputArray[index];
  // tempSpan.classList.add('word');
  tempSpan.classList.add(color[selectRandom(color.length)]);
  tempSpan.classList.add(size[selectRandom(size.length)]);
  tempSpan.classList.add(trasnfRott[selectRandom(trasnfRott.length)]);
  tempSpan.classList.add(transfSkew[selectRandom(transfSkew.length)]);
  tempSpan.style.fontFamily = fonts[selectRandom(fonts.length)];
  tempSpan.style.fontSize = selectRandonFontSize(45, 15);
  tempSpan.style.backgroundImage = selectBackgroundImage();
  tempSpan.addEventListener('click', changeStyle);
  outputText.append(tempSpan);
 }
}

// split method https://www.w3schools.com/jsref/jsref_split.asp
function handleInputText() {
 const tempText = inputText.value;
 const textArray = tempText.split(' ');
 if (checkEmptyInput(tempText) || checkOnlySpaces(textArray)) {
  outputText.innerText = 'Por favor, digite o conteúdo da carta.';
  return;
 }
 outputText.innerText = '';
 removeSpans();
 generateSpans(textArray);
 counterWords();
}

// add events
btnCreate.addEventListener('click', handleInputText);
