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
  const query = "SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;";
  const [ books ] = await connection.execute(query, [author_id]);
  if (books.length === 0) return null;

  return books.map(serialize);
}

// valida dados antes da adição ao banco
const isValid = async (title, author_id) => {
	if (!title || typeof title !== 'string' || title.length < 3) return false;
	if (!author_id) return false;
  
  const query = 'SELECT id FROM model_example.authors WHERE id = ?;'
  const [authors] = await connection.execute(query,[author_id]);
  if (authors.length ===0 ) return false;

	return true;
};

// adiciona book ao db
const create = async (title, author_id) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?);',
	[title, author_id],
);

module.exports = {
	getAll,
  findById,
  findByAuthorId,
  isValid,
	create,
};