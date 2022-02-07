const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAllAnimals = () => {
  const specieAndQUantity = {};
  species.forEach((specie) => {
    const { name, residents } = specie;
    specieAndQUantity[name] = residents.length;
  });
  return specieAndQUantity;
};

const countSpecie = (specie) => {
  const specieObj = species.find((element) => {
    const { name } = element;
    return name === specie;
  });
  const { residents } = specieObj;
  return residents.length;
};

const countSpecieSex = (specie, sex) => {
  const specieObj = species.find((element) => {
    const { name } = element;
    return name === specie;
  });
  const { residents } = specieObj;
  return residents.filter((resident) => resident.sex === sex).length;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countAllAnimals();
  }
  const { specie, sex } = animal;
  if (sex === undefined && specie) {
    return countSpecie(specie);
  }
  return countSpecieSex(specie, sex);
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
