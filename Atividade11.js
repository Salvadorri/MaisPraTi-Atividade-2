const pedidos = [
  { cliente: "Rodrigo", produto: "Notebook", quantidade: 1 },
  { cliente: "Alicia", produto: "Smartphone", quantidade: 1 },
  { cliente: "Rodrigo", produto: "Tablet", quantidade: 1 },
  { cliente: "Kleber", produto: "Fones de ouvido", quantidade: 2 },
  { cliente: "Alicia", produto: "Carregador", quantidade: 4 },
  { cliente: "Rodrigo", produto: "Smartphone", quantidade: 1 },
  { cliente: "Kleber", produto: "Cabos de carregador", quantidade: 5 },
];

const totalCliente = {};

pedidos.forEach((compra) => {
  if (totalCliente[compra.cliente]) {
    totalCliente[compra.cliente] += compra.quantidade;
  } else {
    totalCliente[compra.cliente] = compra.quantidade;
  }
});

console.log(totalCliente);
