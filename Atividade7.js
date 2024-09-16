const produtos = [
    { nome: "Camiseta", preco: 150, desconto: 0 },
    { nome: "Calça", preco: 80, desconto: 0 },
    { nome: "Tenis", preco: 300, desconto: 0 },
    { nome: "Boné", preco: 30, desconto: 0 }
  ];
  
  produtos.forEach(item => {
    item.desconto = item.preco * 0.1;
    item.preco -= item.desconto;
    console.log(`${item.nome}: Novo preço após desconto de 10% = R$ ${item.preco.toFixed(2)}`);
  });