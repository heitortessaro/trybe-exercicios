const wakeUp = () => { return 'Acordando!!' }

const breakfast = () => { return 'Bora tomar café!!' }

const sleep = () => { return 'Partiu dormir!!' }

// Ao chamar a função doingThings:
// Ela deve retornar o valor do respectivo parâmetro
const doingThings = func => {
    return func();
}

console.log(doingThings(breakfast))