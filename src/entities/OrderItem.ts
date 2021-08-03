export default class OrderItem {
    description: string;
    price: number;
    quantity: number;
    volume: number;
    density: number;

    constructor(description: string, price: number, quantity: number, volume: number, density: number) {
        this.description = description;
        this.price = price;
        this.volume = volume;
        this.density = density;
        this.quantity = quantity;
    }
    public calculateShipping(distance: number): number {
        return distance * this.volume * (this.density / 100);
    }

    getTotal() {
        return (this.price * this.quantity);
    }
}
