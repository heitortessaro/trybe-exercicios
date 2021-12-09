let fontSize = document.getElementById('fontSize');
let fontFamily = document.getElementById('fontFamily');
let bgColor = document.getElementById('bgColor');
let textColor = document.getElementById('textColor');
let lineHeight = document.getElementById('lineSpacing');

// add listenet to elements related to change
// get values of each element
window.onload = function () {
  fontSize.value = 18;
  fontFamily.value = 'Arial';
  bgColor.value = '#000000';
  textColor.value = '#ffffff';
  lineHeight.value = '1';

  document.body.style.fontSize = fontSize.value + 'px';
  document.body.style.fontFamily = fontFamily.value;
  document.body.style.backgroundColor = bgColor.value;
  document.body.style.color = textColor.value;
  document.body.style.lineHeight = parseInt(lineHeight.value);
};
