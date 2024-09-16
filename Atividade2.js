const livro = {
  titulo: "Battlefield 4: Contagem Regressiva",
  autor: "Peter Grimsdale",
  ano: 2014,
  genero: "Ação",
};

let temEditora = false;

for (let propriedade in livro) {
  if (propriedade === "editora") {
    temEditora = true;
    break;
  }
}

console.log(livro);

if (!temEditora) {
  livro.editora = "Editora Exemplo";
  console.log("Propriedade 'editora' foi adicionada ao livro.");
} else {
  console.log("A propriedade 'editora' já existe no livro.");
}

console.log(livro);
