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

const objValues = obj => {
    values = Object.values(obj);
    return values;
}

const allLessons = (obj1, obj2, obj3) => {
    // Como se deseja criar um "array" de objetos, eles devem ser inseridos dentro de chaves, para que fossem passados como um array
    const newObj = Object.assign({}, { obj1, obj2, obj3 });
    return newObj;
}

addPropertyObject(lesson2, 'turno', 'noite');
console.log(allLessons(lesson1, lesson2, lesson3))