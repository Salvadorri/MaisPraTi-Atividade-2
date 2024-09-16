const transacoes = [
  { tipo: "entrada", valor: 1000 },
  { tipo: "saida", valor: 500 },
  { tipo: "entrada", valor: 250 },
  { tipo: "saida", valor: 300 },
  { tipo: "entrada", valor: 800 },
  { tipo: "saida", valor: 400 },
];

let saldoFinal = 0;

transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldoFinal += transacao.valor;
  } else if (transacao.tipo === "saida") {
    saldoFinal -= transacao.valor;
  }
});

console.log(`O saldo final é: R$ ${saldoFinal.toFixed(2)}`);
