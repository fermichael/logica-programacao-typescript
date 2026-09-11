let product = "Micro-ondas";
let numero = 83.0;

export function show(product: string, numero: number) {
  console.log(product.toUpperCase(), numero.toFixed(0));
}

show(product, numero);
