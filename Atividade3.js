const produto = {
  nome: "Teclado",
  preco: 300,
  estoque: 30,
  peso: 1.5,
  ano: 2024,
  desconto: 10,
};

function filtro(produto, valor) {
  const resultado = {};

  for (let propriedade in produto) {
    if (produto[propriedade] > valor) {
      resultado[propriedade] = produto[propriedade];
    }
  }
    
  return resultado;
}

const produtoFiltrado = filtro(produto, 10);
console.log(produtoFiltrado);
