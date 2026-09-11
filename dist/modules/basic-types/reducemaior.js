const notas = [7, 9, 5, 10, 6];
const maiorNota = notas.reduce((acc, notaAtual) => {
    if (notaAtual > acc) {
        return notaAtual;
    }
    else {
        return acc;
    }
}, notas[0]);
console.log(maiorNota);
export {};
