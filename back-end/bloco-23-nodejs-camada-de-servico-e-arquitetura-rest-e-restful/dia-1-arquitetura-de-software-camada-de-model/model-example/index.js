const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(express.json());

// utiliza a porta definida na variável global ou então a 3000
const PORT = process.env.PORT || 3000;

// rota de teste
app.get('/test', (_req, res) => {
  res.status(200).json('message: tudo certo')
})

// -------- Auhors -------------------

// rota para retornar all authors
app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

// retorna dados de um author
app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// -------- books -------------------

app.get('/books', async (_req,res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

app.get('/books/author/:id', async(req, res) => {
  const { id } = req.params;
  const books = await Book.findByAuthorId(id);
  if (!books) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const book = await Book.findById(id);

	if (!book) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(book);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});