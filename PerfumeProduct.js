export default class PerfumeProduct {
    constructor(brand, price, volume) {
        this.brand = brand;
        this.price = price;
        this.volume = volume;
    }

    showInfo() {
        console.log(`${this.brand}, ${this.price}, ${this.volume}`);
    }
};
