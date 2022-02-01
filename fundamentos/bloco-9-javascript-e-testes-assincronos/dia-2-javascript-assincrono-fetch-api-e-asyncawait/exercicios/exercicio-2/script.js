const API_URL = `https://api.coincap.io/v2/assets`;

const catchCurrencies = async () => {
    try {
        const response = await fetch(API_URL);
        const dataCur = await response.json();
        // console.log(data.data);
        const { data } = dataCur;
        // const first10 = data.filter((element, index) => index < 10);
        const first10 = data.filter((element) => parseInt(element.rank) <= 10);
        return first10;
    } catch (error) {
        console.log('Erro de aquisição de dados.')
    }
}

const round2Dec = (number) => Math.round(number * 100) / 100;

const createString = ({ name, symbol, priceUsd }) =>
    `${name} (${symbol}) ${round2Dec(parseFloat(priceUsd))}.`;

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
const removeChild = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const showCurrencies = async () => {
    try {
        const first10 = await catchCurrencies();
        const stringArr = first10.map((element) => createString(element));
        removeChild(criptoList);
        for (const string of stringArr) {
            const li = document.createElement('li');
            li.innerHTML = string;
            criptoList.appendChild(li);
        }
    } catch (error) {
        alert('Erro de conexão. Tente novamente.')
    }

}

const start = () => {
    const btnGet = document.getElementById('btnGetCurrencies');
    const criptoList = document.getElementById('criptoList');

    btnGet.addEventListener('click', showCurrencies);
};

window.onload = () => start();