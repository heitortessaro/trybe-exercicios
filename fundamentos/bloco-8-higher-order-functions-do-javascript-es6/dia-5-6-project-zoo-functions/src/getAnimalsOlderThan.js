const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minimalAge) {
  const { species } = data;
  const selectedAnimal = species.find((specie) => {
    const { name } = specie;
    return name === animal;
  });
  const { residents } = selectedAnimal;
  return residents.every((resident) => {
    const { age } = resident;
    return age >= minimalAge;
  });
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
