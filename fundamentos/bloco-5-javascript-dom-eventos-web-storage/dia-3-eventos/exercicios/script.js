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

// PART 1 --------------------------------------------------------
function createDaysOfTheMonth(daysList, holidayList, fridayList) {
  const ulDays = document.getElementById('days');
  for (let index = 0; index < daysList.length; index += 1) {
    let tempLi = document.createElement('li');
    tempLi.innerText = daysList[index];
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

// PART 2 --------------------------------------------------------
function createButton(buttonName, buttonId, fatherClass) {
  let tempDiv = document.getElementsByClassName(fatherClass)[0];
  let tempButton = document.createElement('button');
  tempButton.innerText = buttonName;
  tempButton.id = buttonId;
  tempDiv.appendChild(tempButton);
}

createButton('Feriados', 'btn-holiday', 'buttons-container');

// PART 3 --------------------------------------------------------
// let holidayButton = document.querySelector('.btn-holiday');
let holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', function () {
  let holidayList = document.getElementsByClassName('holiday');
  //   console.log(holidayList[0].style.backgroundColor);
  if (
    holidayList[0].style.backgroundColor === 'rgb(238, 238, 238)' ||
    holidayList[0].style.backgroundColor === ''
  ) {
    for (let index = 0; index < holidayList.length; index += 1) {
      holidayList[index].style.backgroundColor = 'green';
      holidayList[index].style.color = 'white';
    }
  } else {
    for (let index = 0; index < holidayList.length; index += 1) {
      holidayList[index].style.backgroundColor = 'rgb(238,238,238)';
      holidayList[index].style.color = '#666';
    }
  }

  //   let color = holidayButton.style.color;
  //   console.log(holidayList[0].style.backgroundColor);
});

// PART 4 --------------------------------------------------------
createButton('Sexta-Feira', 'btn-friday', 'buttons-container');

// PART 5 --------------------------------------------------------
let fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click', function () {
  let fridayList = document.getElementsByClassName('friday');
  let replacementText = 'Sextou';
  if (fridayList[0].innerText !== replacementText) {
    for (let index = 0; index < fridayList.length; index += 1) {
      fridayList[index].innerText = 'Sextou';
    }
  } else {
    for (let index = 0; index < fridayList.length; index += 1) {
      fridayList[index].innerText = dezFridayList[index];
    }
  }
});
