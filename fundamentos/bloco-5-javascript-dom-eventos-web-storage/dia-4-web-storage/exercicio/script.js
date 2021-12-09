let fontSize = document.getElementById('fontSize');
let fontFamily = document.getElementById('fontFamily');
let bgColor = document.getElementById('bgColor');
let textColor = document.getElementById('textColor');
let lineHeight = document.getElementById('lineHeight');

// add the initial configuration
// add listenet to elements related to change
// get values of each element

// at the load: check if the localstorage exist
//  true: use the storaged values
//  false: use pre-defined values and create local storage

// when some configuration change:
//  call the updateBodyStyle
//  save the alteration on storage

// --------Object with the configuration
let settings = {
  fontSize: 18,
  fontFamily: 'Arial',
  bgColor: '#000000',
  textColor: '#ffffff',
  lineHeight: '1',
};

function updateSettings(event) {
  settings[event.target.id] = event.target.value;
  updateBodyStyle();
}

// --------Event Listeners
// inpirado por: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
fontSize.addEventListener('change', updateSettings);
fontFamily.addEventListener('change', updateSettings);
bgColor.addEventListener('change', updateSettings);
textColor.addEventListener('change', updateSettings);
lineHeight.addEventListener('change', updateSettings);

// function saveToTheStorage(){
//     localStorage.clear();
// }

// --------INITIAL PROCESS
window.onload = function () {
  initialValues();
  updateBodyStyle();
};

function updateBodyStyle() {
  document.body.style.fontSize = settings.fontSize + 'px';
  document.body.style.fontFamily = settings.fontFamily;
  document.body.style.backgroundColor = settings.bgColor;
  document.body.style.color = settings.textColor;
  document.body.style.lineHeight = parseFloat(settings.lineHeight);
}

// function related to the localStorage
// inspirado no codigo da dinamica do dia 5.4: https://github.com/tryber/exercise-end-block5/blob/master/script.js
// to load data from local storage, the solution used here was based on the first answer of https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
function initialValues() {
  if (typeof Storage != 'undefined') {
    if (localStorage.settings === undefined) {
      fontSize.value = settings.fontSize;
      fontFamily.value = settings.fontFamily;
      bgColor.value = settings.bgColor;
      textColor.value = settings.textColor;
      lineHeight.value = settings.lineHeight;
      localStorage.setItem('settings', JSON.stringify(settings));
    } else {
      console.log(settings);
      console.log();
      let tempSettings = localStorage.getItem('settings');
      settings = JSON.parse(tempSettings);
      console.log(settings);
    }
  } else {
    console.log('Sem suporte para Web Storage');
    document.write('Sem suporte para Web Storage');
    fontSize.value = settings.fontSize;
    fontFamily.value = settings.fontFamily;
    bgColor.value = settings.bgColor;
    textColor.value = settings.textColor;
    lineHeight.value = settings.lineHeight;
  }
}
