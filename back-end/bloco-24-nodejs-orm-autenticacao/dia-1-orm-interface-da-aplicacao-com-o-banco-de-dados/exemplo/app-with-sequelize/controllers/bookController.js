const BookService = require('../services/BookService');
const express = require('express');
const router = express.Router();

router.get('/', async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
});


module.exports = router;