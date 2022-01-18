const obj = (fullName, email) => {
    const newObj = {
        nomeCompleto: fullName,
        email: email,
    };
    return newObj;
}

console.log(obj('Heitor José Tessaro', 'heitor.tessaro@hotmail.com'));