const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.middle_name });

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT id, title, author_id FROM model_example.books;',
	);
	return books.map(serialize);;
};

module.exports = {
	getAll,
};