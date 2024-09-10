const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2015,
    cor: 'Branco'
  };

  for (const propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }