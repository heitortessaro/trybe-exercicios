const express = require('express');

const userController = require('./controllers/userController');
const booksController = require('./controllers/bookController'); 


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);
app.use('/books', booksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));