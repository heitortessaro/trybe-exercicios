const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.author_id });

// Busca todas os livros do banco.
const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT id, title, author_id FROM model_example.books;',
	);
	return books.map(serialize);
};

// Busca livros pelo id
const findById = async (id) => {
	const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?';
	const [ bookData ]  = await connection.execute(query, [id]);

	if (bookData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	const { title, authorId } = bookData.map(serialize)[0];

	return {
		id,
		title,
		authorId,
	};
};

// Busca Livros relacionados a um dado author_id
const findByAuthorId = async (author_id) => {
  const query = "SELECT id, title, author_id FROM model_example.books WHERE author_id = ?";
  const [ books ] = await connection.execute(query, [author_id]);
  if (books.length === 0) return null;

  return books.map(serialize);
}

module.exports = {
	getAll,
  findById,
  findByAuthorId,
};