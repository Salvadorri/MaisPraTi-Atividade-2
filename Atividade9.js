const clientes = [
  { nome: "Rodrigo", idade: 20, cidade: "Porto Alegre" },
  { nome: "Alicia", idade: 28, cidade: "Novo Hamburgo" },
  { nome: "Kleber", idade: 42, cidade: "Esteio" },
  { nome: "Juninho", idade: 31, cidade: "Salvador" },
  { nome: "Geraldo", idade: 51, cidade: "Recife" },
];

let clientesAcimaDe30 = 0;

clientes.forEach((cliente) => {
  if (cliente.idade > 30) {
    clientesAcimaDe30++;
  }
});

console.log(`Número de clientes com mais de 30 anos: ${clientesAcimaDe30}`);
                                        