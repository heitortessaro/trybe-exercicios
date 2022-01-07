// get elements
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

// create elements
const title = document.createElement('h1');
title.innerText = 'MEME GENERATOR';

const containerText = document.createElement('div');

const inputText = document.createElement('input');
inputText.id = 'text-input';
inputText.name = 'text';
inputText.placeholder = 'Adicione o texto aqui';
// https://www.w3schools.com/tags/att_input_maxlength.asp
inputText.maxLength = '60';

const labelInputText = document.createElement('label');
labelInputText.innerHTML = 'Texto do meme: ';
labelInputText.setAttribute('for', 'text');

const memeContainer = document.createElement('section');
memeContainer.id = 'meme-image-container';

const memeText = document.createElement('p');
memeText.id = 'meme-text';
memeText.innerText = 'Que MeMe zueiro!';

const memeImage = document.createElement('img');
memeImage.id = 'meme-image';
memeImage.src = '/imgs/Chloe-meme.jpg';
memeImage.alt = 'Meme image.';

const containerImage = document.createElement('div');

// input file: https://www.w3schools.com/tags/att_input_type_file.asp
const inputImage = document.createElement('input');
inputImage.id = 'meme-insert';
inputImage.type = 'file';
inputImage.name = 'image';

const labelInputImage = document.createElement('label');
labelInputImage.innerHTML = 'Texto do meme:   ';
labelInputImage.setAttribute('for', 'image');

const btnFire = document.createElement('button');
btnFire.id = 'fire';
btnFire.innerText = 'Borda Fire';

const btnWater = document.createElement('button');
btnWater.id = 'water';
btnWater.innerText = 'Borda Water';

const btnEarth = document.createElement('button');
btnEarth.id = 'earth';
btnEarth.innerText = 'Borda Earth';

const imagesContainer = document.createElement('section');

const meme1 = document.createElement('img');
meme1.id = 'meme-1';
meme1.src = '/imgs/meme1.png';

const meme2 = document.createElement('img');
meme2.id = 'meme-2';
meme2.src = '/imgs/meme2.png';

const meme3 = document.createElement('img');
meme3.id = 'meme-3';
meme3.src = '/imgs/meme3.png';

const meme4 = document.createElement('img');
meme4.id = 'meme-4';
meme4.src = '/imgs/meme4.png';

// add elements
header.appendChild(title);

// main.appendChild(containerText);

main.appendChild(inputText);
inputText.before(labelInputText);

main.appendChild(containerImage);
containerImage.appendChild(inputImage);
inputImage.before(labelInputImage);

main.appendChild(memeContainer);

memeContainer.appendChild(memeImage);
memeContainer.appendChild(memeText);

main.appendChild(btnFire);
main.appendChild(btnWater);
main.appendChild(btnEarth);

main.appendChild(imagesContainer);
imagesContainer.appendChild(meme1);
imagesContainer.appendChild(meme2);
imagesContainer.appendChild(meme3);
imagesContainer.appendChild(meme4);

// functions
function insertText() {
  memeText.innerText = inputText.value;
}

// handle input file https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
function uploadMemeImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function changeBorderEarth() {
  memeContainer.style.border = '6px groove green';
}

function changeBorderFire() {
  memeContainer.style.border = '3px dashed red';
}

function changeBorderWater() {
  memeContainer.style.border = '5px double blue';
}

function changeImageMeme(event) {
  memeImage.src = event.target.src;
}

// add events
inputText.addEventListener('input', insertText);

inputImage.addEventListener('change', uploadMemeImage);

btnEarth.addEventListener('click', changeBorderEarth);
btnFire.addEventListener('click', changeBorderFire);
btnWater.addEventListener('click', changeBorderWater);

meme1.addEventListener('click', changeImageMeme);
meme2.addEventListener('click', changeImageMeme);
meme3.addEventListener('click', changeImageMeme);
meme4.addEventListener('click', changeImageMeme);
