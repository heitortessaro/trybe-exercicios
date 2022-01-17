const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addPropertyObject = (obj, key, value) => {
    obj[key] = value;
};

const listKeys = obj => {
    keys = Object.keys(obj);
    return keys;
}

const objSize = obj => {
    keys = Object.keys(obj);
    return keys.length;
}

addPropertyObject(lesson2, 'turno', 'noite');
console.log(objSize(lesson3))