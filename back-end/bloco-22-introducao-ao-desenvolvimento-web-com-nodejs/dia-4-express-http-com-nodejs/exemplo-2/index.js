const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

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
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// Post para editar informações
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

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