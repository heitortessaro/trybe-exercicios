const BookService = require('../services/BookService');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { author } = req.query;
  let books;
  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }
  res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
});

router.post('/', async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  console.log('aqui');
  
  const updatedUser = await BookService.update(id, { title, author, pageQuantity, publisher });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
});

module.exports = router;