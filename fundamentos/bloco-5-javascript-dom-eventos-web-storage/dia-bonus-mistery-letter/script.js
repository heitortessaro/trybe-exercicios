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

const btnShow = document.createElement('button');
btnShow.innerText = 'Show Letter';
btnShow.id = 'mostrar-carta';

const wordCounter = document.createElement('p');
wordCounter.id = 'carta-contador';

// add elements
header.appendChild(title);

main.appendChild(inputText);

main.appendChild(btnCreate);

main.appendChild(btnShow);

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

// const color = ['newspaper', 'magazine1', 'magazine2'];
// const size = ['medium', 'big', 'reallybig'];
// const trasnfRott = ['rotateleft', 'rotateright'];
// const transfSkew = ['skewleft', 'skewright'];

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

const fontWeight = ['300', '600', '900'];

const textTransform = ['none', 'capitalize', 'lowercase', 'uppercase'];

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

function selectRandonPadding(max, min) {
 const delta = max - min;
 const paddingSize = Math.floor(delta * Math.random() + min);
 return `${paddingSize}px`;
}

function selectRandonSkewX(max, min) {
 const delta = max - min;
 const skew = Math.floor(delta * Math.random() + min);
 return `skewX(${skew}deg)`;
}

function selectRandonRotation(max, min) {
 const delta = max - min;
 const rotation = Math.floor(delta * Math.random() + min);
 return `rotate(${rotation}deg)`;
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

function selectRandomColor() {
 const red = Math.floor(128 * Math.random());
 const green = Math.floor(128 * Math.random());
 const blue = Math.floor(128 * Math.random());
 return `rgb(${red},${green},${blue})`;
}

function changeStyle(event) {
 const element = event.target;
 element.className = '';
 element.style.fontFamily = fonts[selectRandom(fonts.length)];
 element.style.fontSize = selectRandonFontSize(45, 15);
 element.style.padding = selectRandonPadding(20, 8);
 element.style.backgroundImage = selectBackgroundImage();
 element.style.fontWeight = fontWeight[selectRandom(fontWeight.length)];
 element.style.textTransform =
  textTransform[selectRandom(textTransform.length)];
 element.style.transform =
  selectRandonSkewX(15, -15) + selectRandonRotation(5, -5);
 element.style.color = selectRandomColor();
 element.classList.add('hidden');
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
  if (inputArray[index] !== '') {
   tempSpan.innerText = inputArray[index];
   tempSpan.style.fontFamily = fonts[selectRandom(fonts.length)];
   tempSpan.style.fontSize = selectRandonFontSize(45, 15);
   tempSpan.style.padding = selectRandonPadding(20, 8);
   tempSpan.style.backgroundImage = selectBackgroundImage();
   tempSpan.style.fontWeight = fontWeight[selectRandom(fontWeight.length)];
   tempSpan.style.textTransform =
    textTransform[selectRandom(textTransform.length)];
   tempSpan.style.transform =
    selectRandonSkewX(20, -20) + selectRandonRotation(5, -5);
   tempSpan.style.color = selectRandomColor();
   tempSpan.classList.add('hidden');
   tempSpan.addEventListener('click', changeStyle);
   outputText.append(tempSpan);
  }
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

function hiddeAndShow() {
 // inspirado por: https://stackoverflow.com/questions/9819592/how-to-iterate-over-children-with-for-loop
 const child = outputText.children;
 if ('Show Letter' === btnShow.innerText) {
  for (let index = 0; index < child.length; index += 1) {
   child[index].classList.remove('hidden');
  }
  btnShow.innerText = 'Hidde Letter';
 } else {
  for (let index = 0; index < child.length; index += 1) {
   child[index].classList.add('hidden');
  }
  btnShow.innerText = 'Show Letter';
 }
}

// add events
btnCreate.addEventListener('click', handleInputText);
btnShow.addEventListener('click', hiddeAndShow);