const apiJuros = require('./juros.js')

const capital = 100
const jurosDec = 0.10
const tempo = 1

console.log(apiJuros.montanteJurosCompostos(capital, jurosDec, tempo))