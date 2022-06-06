const imc = require('./imc');
const readLine = require('readline-sync');

console.log('Calculadora de IMC')
const peso = readLine.questionFloat('Digite seu peso em kg: ');
const altura = readLine.questionFloat('Digite sua altura em metros: ');

imc.imc(peso, altura);