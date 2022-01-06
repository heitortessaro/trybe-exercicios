// datepiker
// Add the JavaScript to the end of your document:
var picker = new Pikaday({
 field: document.getElementById('start-date'),
 //  minDate: new Date(1960, 1, 1),
 //  maxDate: new Date(2021, 12, 31),
 yearRange: [2000, 2023],
 //  format: 'DD MMM YYYY',
});

// Select itens

const InputState = document.getElementById('state');
const InputBtnSubmit = document.getElementById('submit');
const InputBtnClear = document.getElementById('clear');
const MainForm = document.getElementById('main-form');
const InputStartDate = document.getElementById('start-date');

// define arrays and variables
const states = [
 'Acre',
 'Alagoas',
 'Amapá',
 'Amazonas',
 'Bahia',
 'Ceará',
 'Distrito Federal',
 'Espirito Santo',
 'Goiás',
 'Maranhão',
 'Mato Grosso do Sul',
 'Mato Grosso',
 'Minas Gerais',
 'Pará',
 'Paraíba',
 'Paraná',
 'Pernambuco',
 'Piauí',
 'Rio de Janeiro',
 'Rio Grande do Norte',
 'Rio Grande do Sul',
 'Rondônia',
 'Roraima',
 'Santa Catarina',
 'São Paulo',
 'Sergipe',
 'Tocantins',
];

const statesAbr = [
 'AC',
 'AL',
 'AP',
 'AM',
 'BA',
 'CE',
 'DF',
 'ES',
 'GO',
 'MA',
 'MS',
 'MT',
 'MG',
 'PA',
 'PB',
 'PR',
 'PE',
 'PI',
 'RJ',
 'RN',
 'RS',
 'RO',
 'RR',
 'SC',
 'SP',
 'SE',
 'TO',
];

for (let index = 0; index < states.length; index += 1) {
 const option = document.createElement('option');
 option.innerText = states[index];
 option.value = statesAbr[index];
 InputState.appendChild(option);
}

function handleSubmit(event) {
 event.preventDefault();
 return;
}

// reset method: https://www.w3schools.com/jsref/met_form_reset.asp
function clearData() {
 MainForm.reset();
 return;
}

function dateIsValid() {
 //  const testDate = '07/11/2022';
 if (
  InputStartDate.value.charAt(2) !== '/' ||
  InputStartDate.value.charAt(5) !== '/' ||
  InputStartDate.value.length !== 10
 ) {
  alert(
   'Data no formato incorreto. Favor inserir os dados da data no padrão dd/mm/aaaa.'
  );
  return false;
 }
 let day = InputStartDate.value.slice(0, 2);
 let month = InputStartDate.value.slice(3, 5);
 let year = InputStartDate.value.slice(6);
 if (
  day < 1 ||
  day > 31 ||
  month < 1 ||
  month > 12 ||
  year < 1900 ||
  year > 2022 ||
  isNaN(day) ||
  isNaN(month) ||
  isNaN(year)
 ) {
  alert(
   'Data no formato incorreto. Favor Verificar se os valores estão corretos.'
  );
  return false;
 }
 return true;
}

InputBtnSubmit.addEventListener('click', handleSubmit);
// InputBtnClear.addEventListener('click', clearData);
// dateIsValid();
