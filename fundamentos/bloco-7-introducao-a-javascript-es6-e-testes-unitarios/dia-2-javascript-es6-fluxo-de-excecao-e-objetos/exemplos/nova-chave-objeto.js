const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

function novaChave(objeto, key, valor) {
    objeto[key] = valor;
}

console.log(customer);
novaChave(customer, 'lastName', 'Tibursio');
console.log(customer);