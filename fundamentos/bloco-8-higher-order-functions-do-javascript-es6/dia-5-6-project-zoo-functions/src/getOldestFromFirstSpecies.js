const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getFirstEmployeeAnimal = (employeeSelected) => employees
  .find((employee) => employee.id === employeeSelected).responsibleFor[0];

const getTheOldelstOfSpecie = (id) => species
  .find((animal) => animal.id === id)
  .residents
  .reduce((acc, resident) => {
    if (resident.age > acc.age) {
      return resident;
    }
    return acc;
  });

function getOldestFromFirstSpecies(id) {
  const responsibleForAnimalId = getFirstEmployeeAnimal(id);
  const infoObj = getTheOldelstOfSpecie(responsibleForAnimalId);
  return Object.values(infoObj);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
