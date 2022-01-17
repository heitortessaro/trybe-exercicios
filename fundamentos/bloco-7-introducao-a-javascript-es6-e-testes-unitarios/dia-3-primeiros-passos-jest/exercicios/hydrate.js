function hydrate(inputString) {
    // extract number from string using match and regular expressions -> https://www.youtube.com/watch?v=pfkkdzeyx6U
    // 1 - what is inside /..../ is the regular expression
    // 2 - \d+ -> look for number (they may be more than one)
    // 3 - g -> search globally

    // match doc -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
    let reg = /\d+/g;
    let numbers = inputString.match(reg);
    let waterCups = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        waterCups += parseInt(numbers[index]);
    }
    if (waterCups > 1) {
        return `${waterCups} copos de água`;
    }
    return `${waterCups} copo de água`;
}

module.exports = hydrate;