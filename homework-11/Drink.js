export class Drink {
    #temperature;
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price= price;
        this.#temperature = temperature;
    }

    getInfoDrink() {
        return (`Напиток:${this.name}, Размер:${this.size}, Цена:${this.price}`);
    }

    getTemperatureDrink() {
        return (`Температура: ${this.#temperature}`);
    }

    setTemperatureDrink(val) {
        this.#temperature = val
        if (this.#temperature > 90) {
            console.log("Температура превышенна");
        } else {
            console.log("Температура стабльна :)");
        }
    }

    #prepareDrink () {
        console.log(`Напиток ${this.name} готовится`);
    }

    serverDrink () {
        this.#prepareDrink() 
        this.setTemperatureDrink(85)
        console.log(`Напиток ${this.name} подан! Температура: ${this.getTemperatureDrink}`);
    }
};