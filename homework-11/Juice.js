import { Drink } from './Drink.js'; 

export class Juice extends Drink {
  constructor(name, size, price, temperature, fruitType){
    super(name, size, price, temperature);
    this.fruitType = fruitType;
  }

  getInfoDrink() {
    const fruitsInfo = super.getInfoDrink();
    return (`Инфо: ${fruitsInfo}, Фрукт: ${this.fruitType}`);
  }

  serverDrink() {
    super.serverDrink()
    this.setTemperatureDrink(10)
  }
};