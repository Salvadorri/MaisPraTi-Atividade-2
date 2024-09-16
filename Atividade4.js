const pessoas = [
  { nome: "Rodrigo", idade: 20, cidade: "Porto Alegre" },
  { nome: "Alicia", idade: 25, cidade: "Novo Hamburgo" },
  { nome: "Kleber", idade: 33, cidade: "Esteio" },
];

for (const pessoa of pessoas) {
  console.log(`
      Nome: ${pessoa.nome}
      Idade: ${pessoa.idade}
      Cidade: ${pessoa.cidade}
  `);
}
