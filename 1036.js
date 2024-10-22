var input = require('fs').readFileSync('index.txt', 'utf8')
var lines = input.split('\n')

const pegarValores = (a) => a.split(' ')

let [a, b, c] = pegarValores(lines.shift())
let r1, r2


function calcular(a, b, c) {
    if(a > 0){
        console.log("Impossivel calcular");
        return
    }
    r1 = ((-b)+Math.sqrt(Math.pow(b, 2)-4*a*c))/2/a

    r2 = ((-b)-Math.sqrt(Math.pow(b, 2)-4*a*c))/2/a
    r1 = r1.toFixed(5)
    r2 = r2.toFixed(5)
    console.log(`R1 = ${r1}`)
    console.log(`R2 = ${r2}`)
}
calcular(a,b,c)
