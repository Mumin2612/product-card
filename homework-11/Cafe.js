export class Cafe {
  constructor(name, location) {
    this.name = name;
      this.location = location;
  }

  showCafeInfo() {
    console.log(`Добро пожаловать в кафе ${this.name}, ${this.location}`);
  }

  orderDrink(drinkInstance) {
    console.log(`«Заказ принят в кафе ${this.location}`);
    const info = drinkInstance.getInfoDrink();
    console.log(info);
    drinkInstance.serverDrink();
  }
};