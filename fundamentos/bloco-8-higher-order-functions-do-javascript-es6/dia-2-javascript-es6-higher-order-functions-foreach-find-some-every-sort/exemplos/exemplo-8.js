// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);

// MDN exemple https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic' },
//     { name: 'Zeros', value: 37 }
// ];
// items.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a must be equal to b
//     return 0;
// });


