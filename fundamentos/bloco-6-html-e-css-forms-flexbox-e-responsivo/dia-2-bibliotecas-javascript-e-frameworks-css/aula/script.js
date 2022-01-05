let myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

let button = document.getElementById('nao-clicar');

button.addEventListener('click', function () {
 myModal.show();
});
