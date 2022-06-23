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

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});