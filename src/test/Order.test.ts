import Coupon from "../entities/Coupon";
import Order from "../Order";

test("Não deve criar um pedido com CPF inválido", function () {
    const cpf = "111.111.111-11";
    const cep = "28666-971";
    expect(() => new Order(cpf, cep, cep)).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido com 3 itens", function () {
    const cpf = "778.278.412-36";
    const cep = "28666-971";
    const order = new Order(cpf,cep,cep);
    order.addItem("Camera", 1000, 2, 0.003, 333);
    order.addItem("Guitarra", 5000, 1, 0.03,109);
    order.addItem("Geladeira", 30,1, 1, 40);
    const total = order.getTotal();
    console.log(total);
    expect(total).toBe(7472.69);
});

test("Deve criar um pedido com cupom de desconto", function () {
    const cpf = "778.278.412-36";
    const cep = "28666-971";
    const order = new Order(cpf,cep, cep);
    order.addItem("Camera", 1000, 2, 0.003, 333);
    order.addItem("Guitarra", 5000, 1, 0.03,333);
    order.addItem("Geladeira", 30,1, 1, 40);
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(6031.91);
});
