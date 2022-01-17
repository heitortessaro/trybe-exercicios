habilities = ['HTML', 'CSS', 'JS', 'Git', 'Soft-skills'];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
const replaceX = (inputString, replacement) => {
    replacement = ` ${replacement} `
    return inputString.replace(' x ', replacement);
}

// https://www.w3schools.com/jsref/jsref_sort.asp
const sortArray = textArray => {
    return textArray.sort();
}

const organizeString = (startString, replacementString, habilitiesArray) => {
    let mainString = replaceX(startString, replacementString);
    const sortedHabilities = sortArray(habilitiesArray);
    sortedHabilities.forEach(hability => {
        mainString = `${mainString}
       -${hability}`
    });
    mainString = `${mainString}
    #goTrybe`;
    return mainString;
}

console.log(organizeString('Tryber x aqui! Minhas cinco principais habilidades são:', 'Heitor', habilities));

