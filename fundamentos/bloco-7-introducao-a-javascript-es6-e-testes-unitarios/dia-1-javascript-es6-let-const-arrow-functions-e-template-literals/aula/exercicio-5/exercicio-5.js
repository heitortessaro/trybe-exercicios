const btn = document.getElementsByTagName('button')[0];
const contador = document.getElementsByTagName('p')[0];
let clickCount = 0;


btn.addEventListener('click', () => {
    clickCount += 1;
    contador.innerText = `Foram clicadas ${clickCount} vezes.`
})

