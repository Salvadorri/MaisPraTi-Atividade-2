const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2014,
    cor: 'Branco'
  };

  for (const propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }