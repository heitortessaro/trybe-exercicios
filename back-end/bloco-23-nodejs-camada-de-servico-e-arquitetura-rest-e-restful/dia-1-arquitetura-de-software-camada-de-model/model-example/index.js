const express = require('express');
const Author = require('./models/Author');

const app = express();

// utiliza a porta definida na variável global ou então a 3000
const PORT = process.env.PORT || 3000;

// rota de teste
app.get('/test', (_req, res) => {
  res.status(200).json('message: tudo certo')
})

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

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});