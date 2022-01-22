// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const groupStrings = (acc, string) => `${acc.toLowerCase()}${string.toLowerCase()}`



const letterCounter = (names, selectedLetter) => {
    const groupedStrings = names.reduce(groupStrings, '');
    return groupedStrings.split('').reduce((acc, letter) => letter === selectedLetter ? acc += 1 : acc, 0);
}

console.log(`The letter a appears ${letterCounter(names, 'a')} times in the array.`)