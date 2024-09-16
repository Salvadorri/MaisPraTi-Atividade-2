const alunos = [
  { nome: "Rodrigo", nota1: 8.5, nota2: 9.2 },
  { nome: "Alicia", nota1: 7.0, nota2: 8.7 },
  { nome: "Kleber", nota1: 8.5, nota2: 4.0 },
];

function calcularMedia(notas) {
  for (const aluno of notas) {
    const { nota1, nota2 } = aluno;
    const media = (nota1 + nota2) / 2;
    console.log(`Média do ${aluno.nome}: ${media.toFixed(2)}`);
  }
}

calcularMedia(alunos);
