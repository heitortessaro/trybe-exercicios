const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/test', (_req, res) => {
  res.status(200).json('message: tudo certo')
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});