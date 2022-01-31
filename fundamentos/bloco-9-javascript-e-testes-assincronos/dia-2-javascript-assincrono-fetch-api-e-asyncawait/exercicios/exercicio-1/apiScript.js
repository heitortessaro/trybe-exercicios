// const fetch = require('./node_modules/node-fetch');

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

console.log('teste');

// const fetchJoke = () => {
//     const myObject = {
//         method: 'GET',
//         headers: { 'Accept': 'application/json' }
//     };
//     fetch(API_URL, myObject)
//         .then(response => response.json())
//         .then(data =>
//             document.getElementById('jokeContainer').innerText =
//             data.joke);
//     // .then({ joke } = data)
//     // .then(console.log(joke));
//     // const response = await fetch(API_URL, myObject);
//     // const data = await response.json();
//     // console.log(response);
// };

const fetchJoke = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    const { joke } = data;
    document.getElementById('jokeContainer').innerText = joke;
};

window.onload = () => fetchJoke();