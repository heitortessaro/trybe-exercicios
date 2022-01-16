const replaceX = (inputString, replacement) => {
    replacement = ` ${replacement} `
    return inputString.replace(' x ', replacement);
}


console.log(replaceX("Tryber x aqui!", "Bebeto"));

