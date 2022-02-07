const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // console.log(typeof ids);
  // console.log(ids);
  const { species } = data;
  const arrSpecies = species.filter((epecie) => {
    const { id } = epecie;
    const idExist = ids.find((element) => element === id);
    // console.log(idExist);
    return idExist;
    // return false;
    // ids.forEach((element) => {
    //   return id === element;
    // });
  });
  console.log();
  return arrSpecies;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
