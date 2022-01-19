// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// const existe = (musica,index,array,id) => {}

function findMusic(id) {
    const checaMusica = musicas.find((musica, index, array) => {
        return musica.id === id;
    })
    if (checaMusica) {
        return `A música com id ${id} existe. O nome dessa música é ${checaMusica.title}`;
    }
    return `A música com id ${id} não existe.`
}

console.log(findMusic('31031685'))