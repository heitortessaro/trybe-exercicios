// SELETORES
const INPUT_TEXT = document.querySelector('#input-text');
const INPUT_CHECKBOX = document.querySelector('#input-checkbox');
const HREF_LINK = document.querySelector('#href');

function handleHrefClick(event) {
 event.preventDefault();
 return;
}

function handleInputCheckbox(event) {
 event.preventDefault();
 return;
}

function handleInputText(event) {
 if (event.key !== 'a') {
  event.preventDefault();
 }
 return;
}

HREF_LINK.addEventListener('click', handleHrefClick);
INPUT_CHECKBOX.addEventListener('click', handleInputCheckbox);
INPUT_TEXT.addEventListener('keypress', handleInputText);
