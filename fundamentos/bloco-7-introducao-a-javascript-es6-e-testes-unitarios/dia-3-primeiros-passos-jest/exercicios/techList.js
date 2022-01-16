function techList(ArrayTech, name) {
    // check if array is empty -> https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/
    if (ArrayTech.length === 0) {
        return 'Vazio!';
    }
    // doc about sort method -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    ArrayTech.sort();
    // let nome = name;
    let arrayOfObjs = [];
    for (let index = 0; index < ArrayTech.length; index += 1) {
        let tempObj = {
            tech: ArrayTech[index],
            name,
        };
        arrayOfObjs[index] = tempObj;
    }
    return arrayOfObjs;
}

module.exports = techList;