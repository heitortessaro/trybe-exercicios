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

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
};

// console.table(leitor);
console.log('----------------------');

console.log(
  `O segundo livro favorito de ${leitor.nome} se chama ${
    leitor.livrosFavoritos[indexListaFavoritos + 1].titulo
  }.`
);

console.log('----------------------');
console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`
);
