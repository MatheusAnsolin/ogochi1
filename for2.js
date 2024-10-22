const usuarios = [
  { nome: 'Carlos', dataNascimento: '1990-05-15' },
  { nome: 'Ana', dataNascimento: '1985-10-20' },
  { nome: 'Lucas', dataNascimento: '1992-07-30' }
];
const vendas = {
  produtoA: 30,
  produtoB: 20,
  produtoC: 15
};
const funcionarios = {
  '101': { nome: 'Maria', cargo: 'Desenvolvedora', salario: 5000 },
  '102': { nome: 'João', cargo: 'Designer', salario: 4500 },
  '103': { nome: 'Pedro', cargo: 'Gerente', salario: 7000 }
};

let somaIdades = 0;
const anoAtual = new Date().getFullYear();

for (const usuario of usuarios) {
  const anoNascimento = new Date(usuario.dataNascimento).getFullYear();
  const idade = anoAtual - anoNascimento;
  somaIdades += idade;
}

const mediaIdade = somaIdades / usuarios.length;
console.log(`Idade média dos usuários: ${mediaIdade.toFixed(2)}`);

let totalVendas = 0;

console.log('Relatório de Vendas:');
for (const produto in vendas) {
  const quantidade = vendas[produto];
  console.log(`${produto}: ${quantidade} vendidos`);
  totalVendas += quantidade;
}

console.log(`Total de vendas: ${totalVendas}`);

for (const id in funcionarios) {
  const funcionario = funcionarios[id];
  console.log(`ID: ${id}, Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
}
