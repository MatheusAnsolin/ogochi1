var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const valor = parseFloat(lines[0].trim());

function calcularNotasEMoedas(valor) {
    let valorEmCentavos = Math.round(valor * 100);

    const notas = [10000, 5000, 2000, 1000, 500, 200]; 
    const moedas = [100, 50, 25, 10, 5, 1]; 

    let resultadoNotas = [];
    let resultadoMoedas = [];

    for (let nota of notas) {
        let quantidade = Math.floor(valorEmCentavos / nota);
        resultadoNotas.push(quantidade);
        valorEmCentavos -= quantidade * nota;
    }

    for (let moeda of moedas) {
        let quantidade = Math.floor(valorEmCentavos / moeda);
        resultadoMoedas.push(quantidade);
        valorEmCentavos -= quantidade * moeda;
    }

    console.log("NOTAS:");
    for (let i = 0; i < notas.length; i++) {
        console.log(`${resultadoNotas[i]} nota(s) de R$ ${(notas[i] / 100).toFixed(2)}`);
    }
    
    console.log("MOEDAS:");
    for (let i = 0; i < moedas.length; i++) {
        console.log(`${resultadoMoedas[i]} moeda(s) de R$ ${(moedas[i] / 100).toFixed(2)}`);
    }
}

calcularNotasEMoedas(valor);
