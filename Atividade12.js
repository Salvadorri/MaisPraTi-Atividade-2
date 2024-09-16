let estoque = [
  { produto: "Notebook", quantidade: 20, minimo: 25 },
  { produto: "Smartphone", quantidade: 15, minimo: 10 },
  { produto: "Tablet", quantidade: 5, minimo: 8 },
  { produto: "Carregador", quantidade: 30, minimo: 20 },
  { produto: "Fones de ouvido", quantidade: 7, minimo: 10 },
];

estoque.forEach((item) => {
  if (item.quantidade < item.minimo) {
    item.quantidade *= 2;
  }
});

console.log("Estoque atualizado:");
estoque.forEach((item) => {
  console.log(`${item.produto}: ${item.quantidade} unidades`);
});
