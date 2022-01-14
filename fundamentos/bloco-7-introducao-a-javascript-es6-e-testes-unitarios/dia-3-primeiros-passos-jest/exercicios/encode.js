function encode(inputString) {
    let stringArray = inputString.split('');
    const inputEncode = ['a', 'e', 'i', 'o', 'u'];
    const outputEncode = ['1', '2', '3', '4', '5'];
    for (let index = 0; index < inputEncode.length; index += 1) {
        let indexTest = 1;
        let letter = inputEncode[index];
        let number = outputEncode[index];
        while (indexTest >= 0) {
            indexTest = stringArray.indexOf(letter);
            stringArray[indexTest] = number;
        }
    }
    console.log('VERIFICA')
    console.log(stringArray.join(''));
    return stringArray.join('');
}

module.exports = encode;