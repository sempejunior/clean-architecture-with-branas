import PlaceOrder from "../PlaceOrder";

test("Deve fazer um pedido", function () {
    const input = {
        cpf: "778.278.412-36",
        items: [
            { description: "Guitarra", price: 1000, quantity: 2, volume: 0.003, density: 333},
            { description: "Amplificador", price: 5000, quantity: 1, volume: 0.03, density: 100},
            { description: "Cabo", price: 30, quantity: 3, volume: 1, density: 40 }
        ],
        coupon: "VALE20"
    };
    const placeOrder = new PlaceOrder();
    const output = placeOrder.execute(input);
    expect(output.total).toBe(6023.99);
});
