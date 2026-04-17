import { Drink } from './Drink.js'; 

export class Coffee extends Drink {
  constructor(name, size, price, temperature, typeGrain){
    super(name, size, price, temperature);
    this.typeGrain = typeGrain;
  }

  getInfoDrink() {
    const baseInfo = super.getInfoDrink();
    return (`Инфо: ${baseInfo}, Зерна: ${this.typeGrain}`);
  }
};


