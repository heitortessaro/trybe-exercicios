const {Console} = require('console');

const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8').then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
    // console.log(simpsons);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
  });
}

async function readAllComAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSimpson) {
    // A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    // Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    // tendo como motivo o que passarmos para o `throw`.
    // Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
    throw new Error('id não encontrado');
  }

  // Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
  // `return` aciona o fluxo de sucesso e resolve a Promise.
  // Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
  // dentro do executor de uma Promise.
  return chosenSimpson;
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// function main() {
//   readAll();
// }

// Opção 1:
// async function main() {
//   console.log('Inicia');
//   const simpson = await getSimpsonById(1);
//   console.log(simpson);
//   console.log('Finaliza')
// }

// // Opção 2:
// function main() {
//   console.log('Inicia')
//   getSimpsonById(1)
//     .then((simpson) => {
//       console.log(simpson)
//       console.log('Finaliza.');
//     });

// }

// async function filterSimpsons() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// }

// caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
// function main() {
//   filterSimpsons();
// }

// async function createSimpsonsFamily() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const familyIds = [1, 2, 3, 4];
//   const simpsonsFamily = simpsons.filter((simpson) =>
//     familyIds.includes(Number(simpson.id))
//   );

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
//   console.log('foi');
// }

// function main() {
//   createSimpsonsFamily();
// }

async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function main() {
  addNelsonToFamily(); // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();
