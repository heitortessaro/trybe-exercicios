const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entryData = countEntrants(entrants);
  const entryClasses = Object.keys(entryData);
  const entryClassesNum = Object.values(entryData);
  const total = entryClasses.reduce((acc, element, index) => {
    const classValue = prices[element];
    return acc + classValue * entryClassesNum[index];
  }, 0);
  return total;
}

// const entrants2 = [
//   { age: 5 },
//   { age: 5 },
//   { age: 5 },
//   { age: 18 },
//   { age: 18 },
//   { age: 50 },
// ];

// console.log(calculateEntry(entrants2));
module.exports = { calculateEntry, countEntrants };
