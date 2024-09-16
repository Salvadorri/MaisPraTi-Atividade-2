const vendas = [
    { produto: "Camiseta", quantidade: 6, valor: 150 },
    { produto: "Calça", quantidade: 3, valor: 80 },
    { produto: "Tenis", quantidade: 4, valor: 300 },
    { produto: "Boné", quantidade: 1, valor: 30 }
  ];

  let valorTotal = 0;

  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });

  console.log(`O valor total de vendas é R$ ${valorTotal.toFixed(2)}`);