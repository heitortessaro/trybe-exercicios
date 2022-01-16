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

const organizeString = (startString, replacementString, habilities) => {
    const mainString = replaceX(startString, replacementString);
    const sortedHabilities = sortArray(habilities);
    return `${mainString}
    - ${sortedHabilities[0]};
    - ${sortedHabilities[1]};
    - ${sortedHabilities[2]};
    - ${sortedHabilities[3]};
    - ${sortedHabilities[4]}.
    #goTrybe
    `;
}

console.log(organizeString('Tryber x aqui! Minhas cinco principais habilidades são:', 'Heitor', habilities));

