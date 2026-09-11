type CartItem = {
  id: number;
  price: number;
};

type ShoppingCart = {
  cartItems: CartItem[];
};

const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 123, price: 585 },
    { id: 456, price: 800 },
    { id: 678, price: 1800 },
  ],
};

export function calculatePrice(shoppingCart: ShoppingCart) {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  console.log(`O valor do seu carrinho saiu por ${total}R$, volte sempre!`);
}

calculatePrice(shoppingCart);
