const livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  anoPublicacao: 1605,
  genero: "Romance",
  // editora: 'Editora Exemplo'// Descomentar para testar se o código percebe se tem existe uma editora
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
  console.log("Propriedade 'editora' foi adicionada ao objeto livro.");
} else {
  console.log("A propriedade 'editora' já existe no objeto livro.");
}

console.log(livro);
