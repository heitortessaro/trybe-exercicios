// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const ehGrande = (name) => name.length > 4;

const findNameWithFiveLetters = () => {
    // const nomeGrande = names.find((name) => name.length > 4);
    const nomeGrande = names.find(ehGrande);
    return nomeGrande
}

console.log(findNameWithFiveLetters());