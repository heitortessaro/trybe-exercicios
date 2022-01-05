let myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

let button = document.getElementById('nao-clicar');

console.log('teste');

button.addEventListener('click', function () {
 alert('teste');
 myModal.show();
});
