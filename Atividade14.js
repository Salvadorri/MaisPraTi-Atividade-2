const empresa = {
  departamentos: [
    {
      nome: "Vendas",
      funcionarios: ["Ana", "Alicia", "Beatriz"],
    },
    {
      nome: "TI",
      funcionarios: ["Rodrigo", "Kleber", "Juninho"],
    },
    {
      nome: "RH",
      funcionarios: ["Gabriela", "Henrique", "Isabel"],
    },
  ],
};

for (let dep in empresa.departamentos) {
  const departamento = empresa.departamentos[dep];
  console.log(`Departamento: ${departamento.nome}`);

  for (let funcionario of departamento.funcionarios) {
    console.log(`- ${funcionario}`);
  }

  console.log();
}
