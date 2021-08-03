import Coupon from "./entities/Coupon";
import Order from "./Order"

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];

    constructor () {
        this.coupons = [
            new Coupon("VALE20", 20)
        ];
        this.orders = [];
    }

    execute (input: any) {
        const cepTo = "111111111";
        const order = new Order(input.cpf, cepTo, input.cepFrom);
        for (const item of input.items) {
            order.addItem(item.description, item.price, item.quantity, item.volume, item.density);
        }
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orders.push(order);
        return {
            total
        };
    }
}
