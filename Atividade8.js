const filmes = [
  { titulo: "Tetris", anoLancamento: 2023 },
  { titulo: "Matrix", anoLancamento: 1999 },
  { titulo: "Vingadores: Ultimato", anoLancamento: 2019 },
  { titulo: "Interestelar", anoLancamento: 2014 },
];

const titulosFilmes = [];

filmes.forEach((filme) => {
  titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);
