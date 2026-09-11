export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING,
    DELIVERED,
    CANCELED,
  }

  function sentStatus(status: OrderStatus) {
    if (status === OrderStatus.DELIVERED) {
      console.log("Pedido entregue");
    }
  }

  console.log(sentStatus(OrderStatus.DELIVERED));
};
