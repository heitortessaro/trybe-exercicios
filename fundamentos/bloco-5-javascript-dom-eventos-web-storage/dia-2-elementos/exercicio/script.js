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

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
