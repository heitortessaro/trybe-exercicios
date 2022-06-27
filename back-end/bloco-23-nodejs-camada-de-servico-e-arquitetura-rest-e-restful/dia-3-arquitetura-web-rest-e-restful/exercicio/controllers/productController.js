const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.status(200).json(product);
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);

  // code 201 para indicar que o produto foi criado
  res.status(201).json(newProduct);
});

router.delete('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    // status code 404 para indicar
    // que o recurso não foi encontrado 
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.exclude(req.params.id);

  // status code 204 para indicar que a requisição foi concluída
  // com sucesso e seu retorno não possuirá conteúdo.
  res.status(204).json();
});

// The 404 represent resource not exist. 
// i.e The called API dose not exist or Request Page dose not exist.
// But in case 400 the resource exist but input is wrong.


router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ name, brand });
});

module.exports = router;