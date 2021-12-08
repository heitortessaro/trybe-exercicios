function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth(daysList, holidayList, fridayList) {
  const ulDays = document.getElementById('days');
  for (let index = 0; index < daysList.length; index += 1) {
    let tempLi = document.createElement('li');
    tempLi.innerText = daysList[index];
    // tempLi.classList.add('day');
    // console.log(holidayList.include() daysList[index]);
    if (holidayList.includes(daysList[index])) {
      tempLi.classList.add('holiday');
    }
    if (fridayList.includes(daysList[index])) {
      tempLi.classList.add('friday');
    }
    ulDays.appendChild(tempLi);
  }
}

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const dezHolidayList = [24, 25, 31];
const dezFridayList = [4, 11, 18, 25];

createDaysOfTheMonth(dezDaysList, dezHolidayList, dezFridayList);

// console.log(dezDaysList.includes(dezHolidayList[0]));
