const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = species.map((specie) => specie.name);
const days = Object.keys(hours);

const getAnimalSchedule = (animal) => {
  const animalObj = species.find((element) => element.name === animal);
  return animalObj.availability;
};

const officeHour = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`;

const animalsInExibition = (day) => species.filter((animal) => animal.availability.includes(day))
  .map((animal) => animal.name);

const getOfficeHours = (day) => {
  const dayObj = { [day]: { officeHour: '', exhibition: '' } };
  if (day === 'Monday') {
    dayObj[day].officeHour = 'CLOSED';
    dayObj[day].exhibition = 'The zoo will be closed!';
    return dayObj;
  }
  dayObj[day].officeHour = officeHour(day);
  dayObj[day].exhibition = animalsInExibition(day);
  return dayObj;
};

function getFullSchedule() {
  return days.reduce((acc, day) => {
    const tempObj = getOfficeHours(day);
    return { ...acc, ...tempObj };
  }, {});
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return getOfficeHours(scheduleTarget);
  }
  return getFullSchedule();
}

console.log(getSchedule());

module.exports = getSchedule;
