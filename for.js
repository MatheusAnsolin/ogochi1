var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const pegarValores = (a) => a.split(', ')

let numeros = pegarValores(lines.shift())

numeros.forEach(a => {
    console.log(numeros[a])
    numeros[a] = Number(numeros[a])
    console.log(numeros[a])

});
let soma = 0

for(let numero of numeros){
    soma += numero
    console.log(`numero ${numero}, somado: ${soma}`)
}