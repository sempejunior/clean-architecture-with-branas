import Coupon from "./entities/Coupon";
import Cpf from "./entities/Cpf";
import Cep from "./entities/Cep";
import OrderItem from "./entities/OrderItem";

export default class Order {
    cpf: Cpf;
    cepTo: Cep
    cepFrom: Cep;
    items: OrderItem[];
    coupon: Coupon | undefined;

    constructor(cpf: string, cepTo: string, cepFrom: string) {
        this.cpf = new Cpf(cpf);
        this.cepTo = new Cep(cepTo);
        this.cepFrom = new Cep(cepFrom);
        this.items = [];
    }

    addItem(description: string, price: number, quantity: number, volume: number, density: number) {
        this.items.push(new OrderItem(description, price, quantity, volume, density));
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    getTotal() :number{
        let total = 0;
        let distance = 0 
        for (const orderItem of this.items) {
            distance = this.cepTo.distanceBeetwenAnotherCep(this.cepFrom);
            total += orderItem.calculateShipping(distance);
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100;
        }
        
        return parseFloat(total.toFixed(2));
    }


}
