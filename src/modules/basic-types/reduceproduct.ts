const produtos = [
  { nome: "Caneta", qtd: 10 },
  { nome: "Caderno", qtd: 5 },
  { nome: "Borracha", qtd: 20 },
];

const totalProdutos = produtos.reduce((acc, item) => acc + item.qtd, 0);
