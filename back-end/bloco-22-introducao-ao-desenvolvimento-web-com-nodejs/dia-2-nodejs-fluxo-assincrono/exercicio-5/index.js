const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilesPromises = strings
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(createFilesPromises);

}

async function readAllFiles() {
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  // aqui usamos a mesma estratégia
    // criamos uma promise de leitura para cada item no array `fileNames`
    const readFilesPromises = fileNames
      .map((fileName) => fs.readFile(fileName, 'utf-8'));

    // e aqui esperamos que todas as leituras sejam resolvidas
    const fileContents = await Promise.all(readFilesPromises);
    const newFileContent = fileContents.join(' ');
    return newFileContent;
}

async function writeNew(text) {
  await fs.writeFile('./fileAll.txt', text);
  console.log('finalizado');
}

arrayToFile();
readAllFiles()
  .then(text => writeNew(text));