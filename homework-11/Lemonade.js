import { Drink } from './Drink.js'; 

export class Lemonade extends Drink {
  constructor(name, size, price,  temperature, isSparkling){
    super(name, size, price, temperature);
    this.isSparkling = isSparkling;
  }

  getInfoDrink() {
    const lemonadeInfo = super.getInfoDrink();
    return (`Инфо: ${lemonadeInfo}, Газированный: ${this.isSparkling}`);
  }
};