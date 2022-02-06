const API_URL = `https://api.coincap.io/v2/assets`;
const CURR_API = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
const END_POINT_USD = `/currencies/usd.json`;

const buildCurrRatesURL = (currency) => `${CURR_API}${currency}`;

const catchUsdBrlRates = async () => {
    try {
        const url = buildCurrRatesURL(END_POINT_USD);
        const response = await fetch(url);
        const dataRate = await response.json();
        // console.log(dataRate.brl);
        return dataRate;
    } catch (error) {
        console.log("Erro de aquisição dados currency rates.")
    }
};


const fetchCoins = async () => {
    //   const url = 'https://api.coincap.io/v2/assets';
    const coins = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return coins;
}

// const catchCurrencies = async () => {
//     try {
//         const response = await fetch(API_URL);
//         const dataCur = await response.json();
//         // console.log(data.data);
//         const { data } = dataCur;
//         // const first10 = data.filter((element, index) => index < 10);
//         return data;
//     } catch (error) {
//         console.log('Erro de aquisição de dados.')
//     }
// }

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
        // const dataRate = await catchCurrenciesRates();
        // console.log(dataRate);
        const data = await fetchCoins();
        const first10 = data.filter((element) => parseInt(element.rank) <= 10);
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
    fetchCoins();
    btnGet.addEventListener('click', showCurrencies);
};

window.onload = () => start();