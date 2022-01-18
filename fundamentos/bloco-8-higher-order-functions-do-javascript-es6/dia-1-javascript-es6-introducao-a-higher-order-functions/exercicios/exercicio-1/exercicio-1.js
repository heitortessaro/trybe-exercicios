const obj = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    const newObj = {
        nomeCompleto: fullName,
        email: `${email}@trybe.com`,
    };
    return newObj;
}

const newEmployees = () => {
    const employees = {
        id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(obj('Heitor Jose Tessaro'));
