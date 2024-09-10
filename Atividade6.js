const funcionarios = [
    { nome: 'Rodrigo', cargo: 'Engenheira', salario: 6000 },
    { nome: 'Alicia', cargo: 'Analista', salario: 4500 },
    { nome: 'Kleber', cargo: 'Gerente', salario: 8500 },
    { nome: 'Juninho', cargo: 'Desenvolvedor', salario: 5500 },
    { nome: 'Geraldo', cargo: 'Apresentador', salario: 9200 }
  ];
  
  const salarioLimite = 7000;
  
  const funcionariosPremiados = [];
  
  for (const func of funcionarios) {
    if (func.salario > salarioLimite) {
      funcionariosPremiados.push(func);
    }
  }
  
  console.log(funcionariosPremiados); 

  
  