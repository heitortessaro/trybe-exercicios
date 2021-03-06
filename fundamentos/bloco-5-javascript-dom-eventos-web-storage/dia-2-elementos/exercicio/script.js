// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let bodyPage = document.body;
let h1 = document.createElement('H1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
bodyPage.appendChild(h1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement('main');
main.classList.add('main-content');
bodyPage.appendChild(main);

// 3 -  Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centerSection = document.createElement('section');
centerSection.classList.add('center-content');
main.appendChild(centerSection);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let para = document.createElement('p');
para.innerText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
para.innerText = para.innerText.toUpperCase();
centerSection.appendChild(para);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftSection = document.createElement('section');
leftSection.classList.add('left-content');
main.appendChild(leftSection);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightSection = document.createElement('section');
rightSection.classList.add('right-content');
main.appendChild(rightSection);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let leftImage = document.createElement('img');
leftImage.src = 'https://picsum.photos/200';
leftImage.classList.add('small-image');
leftSection.appendChild(leftImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let ul = document.createElement('ul');
rightSection.appendChild(ul);

let numeros = [
  'um',
  'dois',
  'tres',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
];
for (let index = 0; index < numeros.length; index += 1) {
  ul.appendChild(document.createElement('li'));
  ul.lastElementChild.innerText = numeros[index];
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  main.appendChild(document.createElement('h3'));
  main.lastElementChild.innerText = `H3 numero ${index + 1}`;
  main.lastElementChild.classList.add('description');
}

// -------------------BONUS----------------------

// B1 - Adicione a classe title na tag h1 criada;
h1.classList.add('title');

// B2 - Adicione a classe description nas 3 tags h3 criadas;
// add at the moment of creation above

// B3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(leftSection);

// B4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
rightSection.style.marginRight = 'auto';

// B5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
centerSection.parentElement.style.backgroundColor = 'green';

// B6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
for (let index = 0; index < 2; index += 1) {
  ul.lastChild.remove();
}
