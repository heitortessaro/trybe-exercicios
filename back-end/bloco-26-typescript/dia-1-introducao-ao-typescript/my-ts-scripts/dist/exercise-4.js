"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exerc_cio_2_1 = __importDefault(require("./exerc\u00EDcio-2"));
const exercise_3_1 = __importDefault(require("./exercise-3"));
const monthsNames = Object.values(exerc_cio_2_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [exercise_3_1.default.OUTONO]: [exerc_cio_2_1.default.MARCO, exerc_cio_2_1.default.ABRIL, exerc_cio_2_1.default.MAIO, exerc_cio_2_1.default.JUNHO],
    [exercise_3_1.default.INVERNO]: [exerc_cio_2_1.default.JUNHO, exerc_cio_2_1.default.JULHO, exerc_cio_2_1.default.AGOSTO, exerc_cio_2_1.default.SETEMBRO],
    [exercise_3_1.default.PRIMAVERA]: [exerc_cio_2_1.default.SETEMBRO, exerc_cio_2_1.default.OUTUBRO, exerc_cio_2_1.default.NOVEMBRO, exerc_cio_2_1.default.DEZEMBRO],
    [exercise_3_1.default.VERAO]: [exerc_cio_2_1.default.DEZEMBRO, exerc_cio_2_1.default.JANEIRO, exerc_cio_2_1.default.FEVEREIRO, exerc_cio_2_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [exercise_3_1.default.PRIMAVERA]: seasonsSouth[exercise_3_1.default.OUTONO],
    [exercise_3_1.default.VERAO]: seasonsSouth[exercise_3_1.default.INVERNO],
    [exercise_3_1.default.OUTONO]: seasonsSouth[exercise_3_1.default.PRIMAVERA],
    [exercise_3_1.default.INVERNO]: seasonsSouth[exercise_3_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(exerc_cio_2_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
