const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => {
    const { managers } = element;
    return managers.some((manager) => manager === id);
  });
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmployees = employees.filter((element) => {
      const { managers } = element;
      return managers.some((manager) => manager === managerId);
    });
    const nameRelatedEmployees = relatedEmployees.map((element) => {
      const { firstName, lastName } = element;
      return `${firstName} ${lastName}`;
    });
    return nameRelatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
