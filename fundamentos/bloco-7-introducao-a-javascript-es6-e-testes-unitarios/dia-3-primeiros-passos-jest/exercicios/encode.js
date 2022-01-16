function encode(inputString) {
    const stringArray = inputString.split('');
    let outputArray = [];
    const inputEncode = ['a', 'e', 'i', 'o', 'u'];
    const outputEncode = ['1', '2', '3', '4', '5'];
    for (let index = 0; index < stringArray.length; index += 1) {
        const letter = stringArray[index];
        let indexOfLetter = inputEncode.indexOf(letter);
        if (indexOfLetter > -1 && indexOfLetter < 5) {
            outputArray.push(outputEncode[indexOfLetter]);
        }
    }
    return outputArray.join('');
}

module.exports = encode;