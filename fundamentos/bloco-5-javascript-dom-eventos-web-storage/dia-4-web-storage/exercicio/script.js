let fontSize = document.getElementById('fontSize');
let fontFamily = document.getElementById('fontFamily');
let bgColor = document.getElementById('bgColor');
let textColor = document.getElementById('textColor');
let lineHeight = document.getElementById('lineSpacing');

// add the initial configuration
// add listenet to elements related to change
// get values of each element

// at the load: check if the localstorage exist
//  true: use the storaged values
//  false: use pre-defined values and create local storage

// when some configuration change:
//  call the updateBodyStyle
//  save the alteration on storage

// --------Event Listeners
// inpirado por: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
fontSize.addEventListener('change', updateBodyStyle);
fontFamily.addEventListener('change', updateBodyStyle);
bgColor.addEventListener('change', updateBodyStyle);
textColor.addEventListener('change', updateBodyStyle);
lineHeight.addEventListener('change', updateBodyStyle);

// function saveToTheStorage(){
//     localStorage.clear();
// }

// --------INITIAL PROCESS
window.onload = function () {
  initialValues();
  updateBodyStyle();
};

function updateBodyStyle() {
  document.body.style.fontSize = fontSize.value + 'px';
  document.body.style.fontFamily = fontFamily.value;
  document.body.style.backgroundColor = bgColor.value;
  document.body.style.color = textColor.value;
  document.body.style.lineHeight = parseFloat(lineHeight.value);
}

function initialValues() {
  fontSize.value = 18;
  fontFamily.value = 'Arial';
  bgColor.value = '#000000';
  textColor.value = '#ffffff';
  lineHeight.value = '1';
}
