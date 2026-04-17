import PerfumeProduct from './PerfumeProduct.js';

export default class PerfumeProductForMan extends PerfumeProduct {
    constructor(brand, price, volume, fragrance) {
        super(brand, price, volume);
        this.fragrance = fragrance;
    }

    showPerfumeDescription() {
        console.log(`${this.brand}, ${this.volume} and all this for ${this.price}`);
    }
};
