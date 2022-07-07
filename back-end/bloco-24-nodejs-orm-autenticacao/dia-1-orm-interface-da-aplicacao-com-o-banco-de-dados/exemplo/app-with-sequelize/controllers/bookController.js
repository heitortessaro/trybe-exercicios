const BookService = require('../services/BookService');
const express = require('express');
const router = express.Router();

router.get('/', async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
});

const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

module.exports = router;