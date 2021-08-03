"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(description, price, quantity, volume, density) {
        this.description = description;
        this.price = price;
        this.volume = volume;
        this.density = density;
        this.quantity = quantity;
    }
    calculateShipping(distance) {
        return distance * this.volume * (this.density / 100);
    }
    getTotal() {
        return (this.price * this.quantity);
    }
}
exports.default = OrderItem;
