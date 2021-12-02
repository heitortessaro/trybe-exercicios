let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let indexListaFavoritos = 0;

console.log(
  `O livro favorito de ${leitor.nome} se chama ${leitor.livrosFavoritos[indexListaFavoritos].titulo}.`
);
