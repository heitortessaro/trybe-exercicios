// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .

let partida = document.getElementById('elementoOndeVoceEsta');
console.log(partida);

let pai = document.getElementById('elementoOndeVoceEsta').parentElement;
console.log(pai);
pai.style.backgroundColor = '#5e636e';
// pai.innerText = 'teste2';

let primeiroFilho = partida.firstElementChild;
primeiroFilho.innerText = 'Texto do primeiro filho.';
primeiroFilho.style.color = 'orange';

let primeiroPai = pai.parentElement;
console.log(primeiroPai);

let textoAtencao = partida.nextSibling;
console.log(textoAtencao);
// textoAtencao.style.color = 'red';

console.log(partida.nextElementSibling);

let listaHTML = pai.children;
// console.log(listaHTML);
console.log(listaHTML[2]);

// ----- Parte 2

let sectionIrmao = document.createElement('section');
pai.appendChild(sectionIrmao);
let lastImao = pai.lastElementChild;
lastImao.id = 'oUltimoIrmao';
console.log(lastImao);

partida.appendChild(sectionIrmao);
partida.lastElementChild.id = 'umNovoUltimoFilho';
console.log(partida.lastElementChild);
