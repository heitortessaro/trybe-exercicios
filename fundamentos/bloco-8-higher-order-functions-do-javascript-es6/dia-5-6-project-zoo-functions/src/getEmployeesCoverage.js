const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(ids) {
  const arrSpecies = species
    .filter((specie) => ids.includes(specie.id))
    .map((specie) => specie.name);
  return arrSpecies;
}

function getLocations(ids) {
  const arrLocations = species
    .filter((specie) => ids.includes(specie.id))
    .map((specie) => specie.location);
  return arrLocations;
}

function checkEmployee(name, inputId) {
  let exist = false;
  employees.forEach((employee) => {
    const { firstName, lastName, id } = employee;
    if (firstName === name || lastName === name || id === inputId) {
      exist = true;
    }
  });
  return exist;
}

function getEmployeeInfo(name, inputId) {
  const employeeArr = employees.find((employee) => {
    const { firstName, lastName, id } = employee;
    return firstName === name || lastName === name || id === inputId;
  });
  const { firstName, lastName, id, responsibleFor } = employeeArr;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocations(responsibleFor),
  };
}

function getInfoAllEmployees() {
  const employeesIds = employees.map((employee) => employee.id);
  return employeesIds.reduce((acc, employeeId) => {
    const tempObj = getEmployeeInfo(undefined, employeeId);
    acc.push(tempObj);
    return acc;
  }, []);
}

// getFullSchedule() {
//   return days.reduce((acc, day) => {
//     const tempObj = getOfficeHours(day);
//     return { ...acc, ...tempObj };
//   }, {});
// }

function getEmployeesCoverage(info) {
  if (info === undefined) {
    return getInfoAllEmployees();
  }
  const { name, id } = info;
  if (!checkEmployee(name, id)) {
    throw new Error('Informações inválidas');
  }
  return getEmployeeInfo(name, id);
}

console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
