// elementos
const paletaDeCores = document.getElementById('color-palette');
const areaDeDesenho = document.getElementById('area-de-desenho');
// definições de variaveis
// const cores = ['red', 'blue', 'purple', 'green', 'gray', 'cyan'];
const cores = ['black', randomColor(), randomColor(), randomColor()];

// code
// requisito 2 e 3
for (let index = 0; index < cores.length; index += 1) {
  const tempColorDiv = document.createElement('div');
  tempColorDiv.className = 'color';
  tempColorDiv.style.backgroundColor = cores[index];
  paletaDeCores.appendChild(tempColorDiv);
}

// requisito 4
const matrizDeDesenho = document.createElement('section');
matrizDeDesenho.id = 'pixel-board';
areaDeDesenho.appendChild(matrizDeDesenho);

// for (let index = 0; index < 25; index += 1) {
//     const tempDrawDiv = document.createElement('div');
//     tempDrawDiv.className = 'pixel';
//     matrizDeDesenho.appendChild(tempDrawDiv);
// }

function createGrid(size) {
  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    const tempLineDiv = document.createElement('div');
    tempLineDiv.style.height = '42';
    matrizDeDesenho.appendChild(tempLineDiv);
    for (let index = 0; index < size; index += 1) {
      const tempDrawDiv = document.createElement('div');
      tempDrawDiv.className = 'pixel';
      tempLineDiv.appendChild(tempDrawDiv);
    }
  }
}

createGrid(5);

// for (let index = 0; index < 25; index += 1) {
//   const tempDrawDiv = document.createElement('div');
//   tempDrawDiv.className = 'pixel';
//   matrizDeDesenho.appendChild(tempDrawDiv);
// }

// requisito 5

// requisito 6
paletaDeCores.firstElementChild.classList.add('selected');

// requisito 7
const divColor = document.getElementsByClassName('color');

function classSelected(event) {
  const tempDiv = document.getElementsByClassName('selected')[0];
  tempDiv.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < divColor.length; index += 1) {
  divColor[index].addEventListener('click', classSelected);
}

// requisito 8
const divPixel = document.getElementsByClassName('pixel');

function pixelSelected(event) {
  const currentColor =
    document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = currentColor;
}

for (let index = 0; index < divPixel.length; index += 1) {
  divPixel[index].addEventListener('click', pixelSelected);
}

// Requisito 9
function limpaQuadro() {
  for (let index = 0; index < divPixel.length; index += 1) {
    divPixel[index].style.backgroundColor = 'white';
  }
}

const limpaBtn = document.createElement('button');
limpaBtn.innerText = 'Limpar';
limpaBtn.id = 'clear-board';
limpaBtn.addEventListener('click', limpaQuadro);
paletaDeCores.after(limpaBtn);

// requisito 10

const vqvSec = document.createElement('section');
vqvSec.id = 'vqv-section';
limpaBtn.after(vqvSec);

const vqvInput = document.createElement('input');
vqvInput.id = 'board-size';
vqvInput.type = 'number';
vqvInput.accept = 'number';
vqvInput.min = '1';
// vqvInput.oninput = "validity.valid||(value='')";

// function resetBoard()
// inspirado em https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function removePixelsDivs() {
  while (matrizDeDesenho.lastChild) {
    matrizDeDesenho.lastChild.remove();
  }
}

function checkSize(size) {
  if (size < 5) {
    return 5;
  }
  if (size > 50) {
    return 50;
  }
  return size;
}

function handleVqvBtn() {
  if (vqvInput.value !== '') {
    const size = checkSize(parseInt(vqvInput.value));
    removePixelsDivs();
    createGrid(size);
  } else {
    alert('Board inválido!');
  }
}

const vqvBtn = document.createElement('button');
vqvBtn.id = 'generate-board';
vqvBtn.innerText = 'VQV';
vqvBtn.addEventListener('click', handleVqvBtn);
// vqvInput.addEventListener('change', function () {
//   console.log(vqvInput.value);
// });

vqvSec.appendChild(vqvInput);
vqvSec.appendChild(vqvBtn);

// Requisito  12
function randomColor() {
  const tempRed = Math.floor(256 * Math.random());
  const tempGreen = Math.floor(256 * Math.random());
  const tempBlue = Math.floor(256 * Math.random());
  return `rgb(${tempRed}, ${tempGreen}, ${tempBlue})`;
}
