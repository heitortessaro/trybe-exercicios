// const bomDia = () => {
//     console.log('Bom dia!')
// }

// bomDia();

// ---------------------------------------

// const gian = {
//     name: 'Gian',
//     surname: 'Fritsche',
//     greet: bomDia,
//     greet2: () => {
//         console.log('Bom dia!')
//     },
// }

// gian.greet();
// gian.greet2();

// ---------------------------------------

const bomDia = () => { return 'Bom dia!' }
const boaTarde = () => { return 'Boa tarde!' }
const boaNoite = () => { return 'Boa noite' }

const gian = {
    name: 'Gian',
    surname: 'Fritsche',
    greet: (callback) => {
        const message = callback();
        console.log(message)
    },
}

const hora = 23;

if (hora < 12) {
    gian.greet(bomDia);
} else if (hora < 18) {
    gian.greet(boaTarde);
} else {
    gian.greet(boaNoite);
}

// ---------------------------------------