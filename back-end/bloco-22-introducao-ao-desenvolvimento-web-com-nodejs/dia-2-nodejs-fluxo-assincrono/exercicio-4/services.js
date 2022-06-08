const data = require('./simpsons.json');

const readAll = (arr) => {
  arr.map((a) => console.log(`${a.id} - ${a.name}`));
}

const readIdWithPromise = (id) => {
  const promise = new Promise((resolve, reject) => {
    const info = data.filter((e) => e.id === id.toString());
    if (info.length === 0 ) {
      reject (new Error ('id não encontrado'))
    }
    resolve(`${info[0].id} - ${info[0].name}`)
  });
  return promise;
}

module.exports = {
  readAll,
  readIdWithPromise,
}


function trataNumeros(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
      reject (new Error ("Informe apenas números"));
    }
    const result = (num1 + num2) * num3;
    if (result < 50) {
      reject (new Error ('Valor muito baixo'));
    }
    resolve(result);
  })

  return promise;
}