const express = require('express');
const router = express.Router();
// const authMiddleware = require('./auth-middleware');

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
router.post('/', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// primeiro faz validação e depois edita dados
router.put('/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

// Requisição para remover da base de dados
router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// Todas as Receitas
router.get('/', function (req, res) {
  res.json(recipes);
});

// Busca por nome
// app.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

// Busca por nome e preco máximo
router.get('/search', function (req, res) {
	const { name, maxPrice, minPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice) && r.price > Number(minPrice));
	res.status(200).json(filteredRecipes);
})

module.exports = router;

