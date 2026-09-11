export const bootstrap = () => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
        OrderStatus[OrderStatus["CANCELED"] = 2] = "CANCELED";
    })(OrderStatus || (OrderStatus = {}));
    function sentStatus(status) {
        if (status === OrderStatus.DELIVERED) {
            console.log("Pedido entregue");
        }
    }
    console.log(sentStatus(OrderStatus.DELIVERED));
};
