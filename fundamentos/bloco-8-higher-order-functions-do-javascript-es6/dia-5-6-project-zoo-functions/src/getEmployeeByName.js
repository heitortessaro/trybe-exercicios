const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const employeeArr = employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
  if (employeeArr === undefined) {
    return {};
  }
  return employeeArr;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
