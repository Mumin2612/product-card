import { Drink } from './Drink.js'; 

export class Tea extends Drink {
  constructor(name, size, price, temperature, color){
    super(name, size, price, temperature);
    this.color = color;
  }

  getInfoDrink() {
    const teaInfo = super.getInfoDrink();
    return (`Инфо: ${teaInfo}, Цвет: ${this.color}`);
  }
};