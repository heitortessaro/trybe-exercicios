const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

const groupByRegions = () => {
  const speciesByRegion = {};
  regions.forEach((region) => {
    speciesByRegion[region] = species
      .filter((element) => element.location === region)
      .map((element) => element.name);
  });
  return speciesByRegion;
};

const groupByRegionsAndNames = (sorted = false) => {
  const regionAndNames = {};
  regions.forEach((region) => {
    regionAndNames[region] = species
      .filter((element) => element.location === region)
      .map((element) => {
        const { name, residents } = element;
        const tempObj = {};
        tempObj[name] = residents.reduce((acc, animal) => {
          acc.push(animal.name);
          return acc;
        }, []);
        if (sorted) {
          tempObj[name].sort();
        }
        return tempObj;
      });
  });
  return regionAndNames;
};

const groupBySex = (selectedSex, sorted) => {
  const animalsOfSex = {};
  regions.forEach((region) => {
    animalsOfSex[region] = species.filter((element) => element.location === region)
      .map((element) => {
        const { name, residents } = element;
        const tempObj = {};
        tempObj[name] = residents.filter((animal) => animal.sex === selectedSex)
          .reduce((acc, animal) => {
            acc.push(animal.name);
            return acc;
          }, []);
        if (sorted) {
          tempObj[name].sort();
        }
        return tempObj;
      });
  });
  return animalsOfSex;
};

const getAninalNames = ({ includeNames, sex = undefined, sorted = undefined }) => {
  if (sex) {
    return groupBySex(sex, sorted);
  }
  if (sorted) {
    return groupByRegionsAndNames(sorted);
  }
  return groupByRegionsAndNames();
};

function getAnimalMap(options) {
  if (options === undefined
    || options.includeNames === undefined
    || options.includeNames === false) {
    return groupByRegions();
  }
  if (options.includeNames === true) {
    return getAninalNames(options);
  }
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
