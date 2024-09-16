const carrinho = {
  itens: [
    { nome: "Camiseta", quantidade: 2, precoUnitario: 150 },
    { nome: "Calça", quantidade: 1, precoUnitario: 80 },
    { nome: "Tenis", quantidade: 1, precoUnitario: 300 },
    { nome: "Boné", quantidade: 3, precoUnitario: 30 },
  ],

  calcularTotal: function () {
    let total = 0;
    this.itens.forEach((produto) => {
      total += produto.quantidade * produto.precoUnitario;
    });
    return total.toFixed(2);
  },
};

console.log(`Total do carrinho: R$ ${carrinho.calcularTotal()}`);
