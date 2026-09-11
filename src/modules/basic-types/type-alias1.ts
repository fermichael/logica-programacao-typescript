type Livro = {
  titulo: string;
  autor: string;
  paginas: number;
};

type Biblioteca = {
  livros: Livro[];
};

const minhaBiblioteca: Biblioteca = {
  livros: [
    { titulo: "Percy Jackson", autor: "Rick Riordan", paginas: 324 },
    { titulo: "Metarmofose", autor: "Frans Kafka", paginas: 400 },
    { titulo: "Heated Rivalry", autor: "Rachel Reid", paginas: 800 },
  ],
};

type Autor = {
  nome: string;
  nacionalidade: string;
};

type Livro2 = {
  titulo: string;
  autor: Autor;
};

type Biblioteca2 = {
  livros: Livro2[];
};

const minhaBiblioteca2: Biblioteca2 = {
  livros: [
    {
      titulo: "qualquercoisa",
      autor: { nome: "qualquercoisa", nacionalidade: "qualquercoisa" },
    },
  ],
};
