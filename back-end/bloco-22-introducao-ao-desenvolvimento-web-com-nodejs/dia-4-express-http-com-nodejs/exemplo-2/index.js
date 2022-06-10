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

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 40.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// Post para adicionar informações
// app.post('/recipes', function (req, res) {
//   const { id, name, price } = req.body;
//   recipes.push({ id, name, price});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// Post para editar informações
// app.put('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

//   res.status(204).end();
// });

// As funções para adicionar e editar foram recriadas utilizando middleware e next

// valida o nome
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data name!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price === '') return res.status(400).json({message: 'Invalid data price!'});

  next()
}

// primeiro faz validação e depois insere dados
// app.post('/recipes', validateName, validatePrice, function (req, res) {
//   const { id, name, price } = req.body;
//   recipes.push({ id, name, price});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// Faz validação e depois insere dados considerando o user recebido do autentificador pelo req
app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// primeiro faz validação e depois edita dados
app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

// Requisição para remover da base de dados
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// Todas as Receitas
app.get('/recipes', function (req, res) {
  res.json(recipes);
});

// Busca por nome
// app.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

// Busca por nome e preco máximo
app.get('/recipes/search', function (req, res) {
	const { name, maxPrice, minPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice) && r.price > Number(minPrice));
	res.status(200).json(filteredRecipes);
})

// Todos os Dinks
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