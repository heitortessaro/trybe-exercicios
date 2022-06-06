USE Pixar;

-- Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT doms.domestic_sales AS vendas_nacionais, ints.international_sales AS vendas_internacionais 
FROM BoxOffice doms
INNER JOIN BoxOffice ints ON
	doms.movie_id = ints.movie_id;
    
-- Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas 
-- internacionais (international_sales) do que vendas nacionais (domestic_sales)
SELECT doms.movie_id, (doms.domestic_sales + ints.international_sales) AS vendas 
FROM BoxOffice doms
INNER JOIN BoxOffice ints ON
	doms.movie_id = ints.movie_id 
    AND doms.domestic_sales < ints.international_sales;
    
-- Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.movie_id AS movie, r.rating AS rating
FROM BoxOffice m
INNER JOIN BoxOffice r ON
	m.movie_id = r.movie_id
ORDER BY rating DESC;

-- Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem 
-- filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.id AS theater_id, t.name AS theater_name, t.location AS theater_location, m.title AS movie_title, m.director AS movie_director, m.year AS released_year
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão 
-- em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes 
-- dos cinemas em ordem alfabética.
SELECT 
	t.id AS theater_id, t.name AS theater_name, t.location AS theater_location, 
    m.title AS movie_title, m.director AS movie_director, m.year AS released_year, m.length_minutes AS movie_length
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz 
-- (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT m.title AS movie_title, m.director AS movie_director, m.year AS released_year, m.length_minutes AS movie_length, i.id AS movie_id
FROM Pixar.Movies as m
INNER JOIN Pixar.Movies as i
ON m.id = i.id 
	AND 
	