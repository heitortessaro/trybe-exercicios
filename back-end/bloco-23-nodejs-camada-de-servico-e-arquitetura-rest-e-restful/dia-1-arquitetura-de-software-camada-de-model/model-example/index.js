const express = require('express');
const rescue = require('express-rescue');
// const Author = require('./models/Author');
// const Author = require('./services/Author');
const Author = require('./controllers/Author');
const Book = require('./models/Book');

const app = express();
app.use(express.json());

// utiliza a porta definida na variável global ou então a 3000
const PORT = process.env.PORT || 3000;

// rota de teste
app.get('/test', (_req, res) => {
  res.status(200).json('message: tudo certo');
});

// -------- Auhors -------------------

// rota para retornar all authors
app.get('/authors', Author.getAll);

// retorna dados de um author
app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

// -------- books -------------------

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/author/:id', async (req, res) => {
  const {id} = req.params;
  const books = await Book.findByAuthorId(id);
  if (!books) return res.status(404).json({message: 'Not found'});
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const {id} = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({message: 'Not found'});

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const {title, author_id} = req.body;

  if (!Book.isValid(title, author_id)) {
    return res.status(400).json({message: 'Dados inválidos'});
  }

  await Book.create(title, author_id);

  res.status(201).json({message: 'Livro criado com sucesso!'});
});

//-------------------------------------

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
