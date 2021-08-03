"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./entities/Cpf"));
const Cep_1 = __importDefault(require("./entities/Cep"));
const OrderItem_1 = __importDefault(require("./entities/OrderItem"));
class Order {
    constructor(cpf, cepTo, cepFrom) {
        this.cpf = new Cpf_1.default(cpf);
        this.cepTo = new Cep_1.default(cepTo);
        this.cepFrom = new Cep_1.default(cepFrom);
        this.items = [];
    }
    addItem(description, price, quantity, volume, density) {
        this.items.push(new OrderItem_1.default(description, price, quantity, volume, density));
    }
    addCoupon(coupon) {
        this.coupon = coupon;
    }
    getTotal() {
        let total = 0;
        let distance = 0;
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
exports.default = Order;
