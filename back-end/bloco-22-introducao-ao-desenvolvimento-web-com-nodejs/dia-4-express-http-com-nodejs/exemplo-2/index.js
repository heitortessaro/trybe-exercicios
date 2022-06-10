const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);


const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// Todos os Drinks
app.get('/drinks', function (req, res) {
  res.json(drinks);
});

// Drinks ordenados alfabeticamente
app.get('/drinks-sorted', function (req, res) {
  const dinksSort = drinks.sort((a, b) => a.name.localeCompare(b.name))
  res.json(dinksSort);
});

// Busca por nome e preco máximo
app.get('/drinks/search', function (req, res) {
	const { name, maxPrice, minPrice } = req.query;
  console.log(name, maxPrice, minPrice)
	const filteredDrinks = drinks.filter((d) => 
    d.name.includes(name) &&
    d.price < Number(maxPrice) &&
    d.price > Number(minPrice));
	res.status(200).json(filteredDrinks);
})

// Drink específico
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
});

// Retorna mensagem caso rota não exista
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});