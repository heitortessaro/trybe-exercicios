USE hr;
-- Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(MAX_SALARY) from jobs;

--  Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MIN(MIN_SALARY) AS menor, MAX(MAX_SALARY) AS maior,  MAX(MAX_SALARY) - MIN(MIN_SALARY) AS diferenca FROM jobs;

-- Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
-- SELECT JOB_ID, (MIN_SALARY + MAX_SALARY) DIV 2 AS media_salarial FROM jobs
-- ORDER BY media_salarial DESC;

SELECT JOB_ID, AVG(SALARY) AS media_salarial FROM employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS TOTAL_FOLHA FROM employees;

-- Escreva uma query que exiba quatro informações: 
-- o maior salário, o menor salário, a soma de todos os salários e a média dos salários. 
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(SALARY),2), ROUND(MIN(SALARY),2), ROUND(SUM(SALARY),2), ROUND(AVG(SALARY),2) FROM employees;

-- Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT COUNT(*) FROM employees
WHERE JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID;

-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro 
-- necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos 
-- com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
SELECT department_id,
	AVG(salary) 'average_salary' ,
	COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

-- Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
-- Se o modo "safe mode" do MySQL estiver habilitado,
-- o MySQL não executa UPDATE ou DELETE sem uma
-- instrução WHERE que não inclua uma PRIMARY KEY.
-- Podemos desabilitar o "safe mode" com:
-- SET SQL_SAFE_UPDATES = 0;
-- e depois das modificações o habilitarmos novamente com:
-- SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, 
-- primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name,
    YEAR(hire_date) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
	LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
	MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;
 -- MID() é equivalente a função SUBSTRING()

-- Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name,
	RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
	MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;
-- MID() é equivalente a função SUBSTRING()

-- OR
SELECT employee_id, first_name,
	DAY(hire_date) 'hire_day'
FROM hr.employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name,
	SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
	MONTH(hire_date) 'hire_month'
FROM hr.employees;

-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;

-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- Escreva uma query que exiba as seguintes informações de cada funcionário:
-- nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT first_name,
	last_name,
	DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;