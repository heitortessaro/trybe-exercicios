// relaciona elementos
const inpTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

let objTarefas = {};

// Requisito 9
function riscaTarefa(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// requisito 7
function changeColor(event) {
  // inpirado em https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
  const tarefas = document.getElementsByClassName('tarefas');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function adicionaEventoTarefa() {
  const tarefas = document.getElementsByClassName('tarefas');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', changeColor);
    tarefas[index].addEventListener('dblclick', riscaTarefa);
  }
}

// Requisito 5 - 6
function criaTarefa() {
  if (inpTextoTarefa.value !== '') {
    const tempLi = document.createElement('li');
    tempLi.classList.add('tarefas');
    tempLi.innerText = inpTextoTarefa.value;
    inpTextoTarefa.value = '';
    listaTarefas.appendChild(tempLi);
    adicionaEventoTarefa();
  }
}

btnCriarTarefa.addEventListener('click', criaTarefa);

// requisito 10
function removeTodasTarefas() {
  // inspirado em https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  while (listaTarefas.firstElementChild) {
    listaTarefas.lastElementChild.remove();
  }
}

const btnApagaTudo = document.createElement('button');
btnApagaTudo.innerText = 'Remove todas as tarefas';
btnApagaTudo.id = 'apaga-tudo';
btnApagaTudo.addEventListener('click', removeTodasTarefas);
listaTarefas.after(btnApagaTudo);

// requisito 11

function removeTarefasConcluidas() {
  // inpirado na primeira resposta https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
  const concluidas = document.getElementsByClassName('completed');
  while (concluidas[0]) {
    concluidas[0].parentElement.removeChild(concluidas[0]);
  }
}

const btnApagaFinalizados = document.createElement('button');
btnApagaFinalizados.innerText = 'Remove tarefas concluidas';
btnApagaFinalizados.id = 'remover-finalizados';
btnApagaFinalizados.addEventListener('click', removeTarefasConcluidas);
listaTarefas.after(btnApagaFinalizados);

// requisito 12
// - recebe a lista de tarefas
// - cria objeto tarefas
// - salva o conteudo de cada item em um key numerada
// - converte para json
// - salva no localStorage

// inspirado em https://stackoverflow.com/questions/684575/how-to-quickly-clear-a-javascript-object
function limpaObjeto(objeto) {
  for (let key in objeto) {
    delete objeto[key];
  }
}

function salvarTarefas() {
  limpaObjeto(objTarefas);
  const tarefas = document.getElementsByClassName('tarefas');
  for (let index = 0; index < tarefas.length; index += 1) {
    const key = `tarefa${index + 1}`;
    objTarefas[key] = {};
    if (tarefas[index].classList.contains('completed')) {
      objTarefas[key].completed = true;
    } else {
      objTarefas[key].completed = false;
    }
    objTarefas[key].texto = tarefas[index].innerText;
  }
  localStorage.setItem('objTarefas', JSON.stringify(objTarefas));
}

const btnSalvarTarefas = document.createElement('button');
btnSalvarTarefas.innerText = 'Salvar tarefas';
btnSalvarTarefas.id = 'salvar-tarefas';
btnSalvarTarefas.addEventListener('click', salvarTarefas);
listaTarefas.after(btnSalvarTarefas);

function carregaTarefas() {
  for (let key in objTarefas) {
    const tempLi = document.createElement('li');
    tempLi.classList.add('tarefas');
    tempLi.innerText = objTarefas[key].texto;
    if (objTarefas[key].completed) {
      tempLi.classList.add('completed');
    }
    listaTarefas.appendChild(tempLi);
    adicionaEventoTarefa();
  }
}

// inspirado no codigo da dinamica do dia 5.4: https://github.com/tryber/exercise-end-block5/blob/master/script.js
// to load data from local storage, the solution used here was based on the first answer of https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
function loadOldTasks() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.objTarefas) {
      const tempTarefas = localStorage.getItem('objTarefas');
      objTarefas = JSON.parse(tempTarefas);
      carregaTarefas();
    }
  } else {
    console.log('Sem suporte para Web Storage');
    alert('Sem suporte para Web Storage');
  }
}

loadOldTasks();

// Requisito 13

// a tarafa selecionada tem o select
// identificar a posição dela dentro da lista
// com a posição salva e o conteúdo salvos remove o item (semelhante 11)
// depois, com base na posição salva usa o before ou after para readicionar a tarefa

function moveUp() {
  const tarefas = document.getElementsByClassName('tarefas');
  let posicao;
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList.contains('selected')) {
      posicao = index;
    }
  }
  if (posicao > 0) {
    const tempLi = document.createElement('li');
    tempLi.className = tarefas[posicao].className;
    tempLi.innerText = tarefas[posicao].innerText;
    tarefas[posicao].parentElement.removeChild(tarefas[posicao]);
    tarefas[posicao - 1].before(tempLi);
    adicionaEventoTarefa();
  }
}

function moveDown() {
  const tarefas = document.getElementsByClassName('tarefas');
  let posicao;
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList.contains('selected')) {
      posicao = index;
    }
  }
  if (posicao < tarefas.length - 1) {
    const tempLi = document.createElement('li');
    tempLi.className = tarefas[posicao].className;
    tempLi.innerText = tarefas[posicao].innerText;
    tarefas[posicao].parentElement.removeChild(tarefas[posicao]);
    tarefas[posicao].after(tempLi);
    adicionaEventoTarefa();
  }
}

const btnMoveDown = document.createElement('button');
btnMoveDown.innerHTML = '&#8595';
btnMoveDown.id = 'mover-baixo';
btnMoveDown.addEventListener('click', moveDown);
listaTarefas.after(btnMoveDown);

const btnMoveUp = document.createElement('button');
btnMoveUp.innerHTML = '&#8593';
btnMoveUp.id = 'mover-cima';
btnMoveUp.addEventListener('click', moveUp);
listaTarefas.after(btnMoveUp);

// Requisito 14
// Quase identico ao requisito 11

function removeItem() {
  // inpirado na primeira resposta https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
  const selecionada = document.getElementsByClassName('selected');
  while (selecionada[0]) {
    selecionada[0].parentElement.removeChild(selecionada[0]);
  }
}

const btnRemoveItem = document.createElement('button');
btnRemoveItem.innerHTML = 'X';
btnRemoveItem.id = 'remover-selecionado';
btnRemoveItem.addEventListener('click', removeItem);
listaTarefas.after(btnRemoveItem);
