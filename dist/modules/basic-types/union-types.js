let shoppingCart = [200.75, 150.12, "33.90", "44", "not defined"];
export function totalize(values) {
    return values
        .map((value) => (typeof value === "number" ? value : parseFloat(value))) //se o tipo for number, retorna o valor, se não tenta converter pra numero
        .filter((values) => !isNaN(values)) //!isNaN: é um not a number? resultado: inverte o valor
        .reduce((acc, curr) => acc + curr, 0); //soma o restante
}
console.log(totalize(shoppingCart));
