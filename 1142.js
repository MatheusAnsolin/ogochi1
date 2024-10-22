var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const pegarValores = (a) => a.split(' ')
let n = lines.shift()
let vetor = []
let linha = 0
for(let indexPrimario = 0; indexPrimario < n; indexPrimario++){
    if(linha>0){
        vetor[indexPrimario] = vetor.push(indexPrimario*linha);
    }else{
        vetor[indexPrimario] = vetor.push(indexPrimario);
    }
    
    indexPrimario++
    console.log(vetor[indexPrimario])
    vetor[indexPrimario] = vetor.push("PUM\n");
    linha++

    console.log(vetor[indexPrimario])

}