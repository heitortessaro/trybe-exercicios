const express = require('express');

const app = express();

const post = [
	{ id: 1, text: 'Texto 1' },
	{ id: 2, text: 'Texto 2' },
  { id: 3, text: 'Texto 3' },
  { id: 4, text: 'Texto 4' },
];

// Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente 
// deve ser retornado o código de status e um JSON, ex: status 404 e { "message": "Opsss, route not found!" }

// Entrega post pelo ID
app.get('/posts/:id', function(req, res){
  const { id } = req.params;
  if(!id) return res.status(404).json({ message: 'Id not defined!'});
  const savedPost = post.find((e) => e.id === Number(id));
  if(!savedPost) return res.status(404).json({ message: 'Id not found!'});
  res.status(200).json(savedPost);
});

app.get('/posts', function(req, res){
  res.status(200).json(post);
});

// Retorna erro no caso não definido
app.get('/posts/', function(req, res){
  res.status(404).json({ message: 'Id not defined!'});
});

app.all('*', function(req,res){
  res.status(404).json({message: "Route not found"});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});