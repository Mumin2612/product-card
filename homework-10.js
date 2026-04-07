class PerfumeProduct {
    constructor(brand, price, volume) {
        this.brand = brand;
        this.price = price;
        this.volume = volume;
    }

    showInfo() {
        console.log(`${this.brand}, ${this.price}, ${this.volume}`);
    }
};

class PerfumeProductForMan extends PerfumeProduct {
    constructor(brand, price, volume, fragrance) {
        super(brand, price, volume);
        this.fragrance = fragrance;
    }

    showPerfumeDescription() {
        console.log(`${this.brand}, ${this.volume} and all this for ${this.price}`);
    }
};

const sauvage = new PerfumeProductForMan("Savage", "65$", "100ml", "The soft aroma of quality perfume");