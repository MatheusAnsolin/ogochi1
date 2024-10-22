// Criando um array de exemplo
const frutas = ['maçã', 'banana', 'laranja', 'manga'];

// 1. push() - Adiciona um ou mais elementos ao final do array
frutas.push('uva');
console.log('Depois de push:', frutas);

// 2. pop() - Remove o último elemento do array
const ultimaFruta = frutas.pop();
console.log('Depois de pop:', frutas, '| Última fruta removida:', ultimaFruta);

// 3. unshift() - Adiciona um ou mais elementos ao início do array
frutas.unshift('morango');
console.log('Depois de unshift:', frutas);

// 4. shift() - Remove o primeiro elemento do array
const primeiraFruta = frutas.shift();
console.log('Depois de shift:', frutas, '| Primeira fruta removida:', primeiraFruta);

// 5. concat() - Combina dois ou mais arrays
const frutasCitricas = ['limão', 'laranja'];
const todasFrutas = frutas.concat(frutasCitricas);
console.log('Depois de concat:', todasFrutas);

// 6. slice() - Retorna uma cópia de uma parte do array
const algumasFrutas = todasFrutas.slice(1, 4);
console.log('Depois de slice:', algumasFrutas);

// 7. splice() - Altera o conteúdo de um array removendo ou substituindo elementos
todasFrutas.splice(2, 1, 'abacaxi'); // Remove 1 elemento na posição 2 e adiciona 'abacaxi'
console.log('Depois de splice:', todasFrutas);

// 8. forEach() - Executa uma função em cada elemento do array
todasFrutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);
});

// 9. map() - Cria um novo array com os resultados da chamada de uma função em cada elemento
const frutasMaiusculas = todasFrutas.map(fruta => fruta.toUpperCase());
console.log('Depois de map:', frutasMaiusculas);

// 10. filter() - Cria um novo array com todos os elementos que passam no teste da função
const frutasComA = todasFrutas.filter(fruta => fruta.includes('a'));
console.log('Depois de filter:', frutasComA);

// 11. find() - Retorna o valor do primeiro elemento que satisfaz a função de teste
const frutaEncontrada = todasFrutas.find(fruta => fruta.startsWith('m'));
console.log('Depois de find:', frutaEncontrada);

// 12. indexOf() - Retorna o índice do primeiro elemento encontrado
const indexManga = todasFrutas.indexOf('manga');
console.log('Índice da manga:', indexManga);

// 13. includes() - Verifica se um elemento está no array
const temBanana = todasFrutas.includes('banana');
console.log('Tem banana?', temBanana);

// 14. reduce() - Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita)
const totalCaracteres = todasFrutas.reduce((acc, fruta) => acc + fruta.length, 0);
console.log('Total de caracteres nas frutas:', totalCaracteres);

// 15. sort() - Ordena os elementos do array
const frutasOrdenadas = todasFrutas.slice().sort(); // Usando slice() para não alterar o original
console.log('Frutas ordenadas:', frutasOrdenadas);

// 16. reverse() - Inverte a ordem dos elementos do array
const frutasInvertidas = frutasOrdenadas.slice().reverse();
console.log('Frutas invertidas:', frutasInvertidas);

// 17. join() - Junta todos os elementos do array em uma string
const frutasString = todasFrutas.join(', ');
console.log('Frutas como string:', frutasString);
