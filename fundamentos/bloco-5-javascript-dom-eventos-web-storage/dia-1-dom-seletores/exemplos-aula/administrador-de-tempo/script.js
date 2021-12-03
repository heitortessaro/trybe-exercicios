let header = document.getElementsByTagName('header')[0];
header.style.backgroundColor = 'yellowgreen';

let footer = document.getElementsByTagName('footer')[0];
footer.style.backgroundColor = 'darkgreen';

let noEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = 'yellow';

let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyH3.length; index += 1) {
  noEmergencyH3[index].style.backgroundColor = 'black';
}

let EmergencyTask = document.getElementsByClassName('emergency-tasks')[0];
EmergencyTask.style.backgroundColor = 'orange';

let EmergencyH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < EmergencyH3.length; index += 1) {
  EmergencyH3[index].style.backgroundColor = 'purple';
}
