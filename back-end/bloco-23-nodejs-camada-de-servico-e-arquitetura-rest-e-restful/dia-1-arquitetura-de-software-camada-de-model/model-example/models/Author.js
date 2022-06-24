const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// Cria uma string com o nome completo da pessoa autora
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors.map(serialize);;
};

const findById = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
	const [ authorData ] = await connection.execute(query, [id]);
	if (authorData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	const { firstName, middleName, lastName } = authorData.map(serialize)[0];

	return getNewAuthor({
		id,
		firstName,
		middleName,
		lastName,
	});
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors
  `;

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
  } else {
    query += 'WHERE first_name = ? AND last_name = ?';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

module.exports = {
	getAll,
  findById,
	createAuthor,
  findByName,
};