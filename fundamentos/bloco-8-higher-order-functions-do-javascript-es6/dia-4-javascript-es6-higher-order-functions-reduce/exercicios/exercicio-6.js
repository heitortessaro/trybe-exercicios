// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const calculateAverage = (obj) => {
    const media = obj.notas.reduce((acc, nota, index, arr) => acc + nota / arr.length, 0);
    //two decimals round : https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    return { nome: obj.nome, average: Math.round(media * 100) / 100 }
}

const studentAverage = (students, grades) => {
    let arrOfObjs = []
    students.forEach((name, index) => {
        arrOfObjs[index] = { nome: name, notas: grades[index] }
    });
    return arrOfObjs.map(calculateAverage);
}

console.log(studentAverage(students, grades));

