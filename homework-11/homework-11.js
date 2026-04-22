import { Cafe } from "./Cafe.js";
import { Coffee } from "./Coffee.js";
import { Juice } from "./Juice.js";
import { Lemonade } from "./Lemonade.js";
import { Tea } from "./Tea.js";

const myCafe = new Cafe ("Italliano expresso", "Piazza San Marco, 146");
const latte = new Coffee ("Latte", "small", "6$", "85–89°C", "Coffea excelsa");
const lemonade = new Lemonade ("sparkling lemonade", "500ml", "3$", "4–6°C","Carbonated");
const tea = new Tea ("Earl Grey", "300ml", "2$", "80–85°C", "Black tea");
const juice = new Juice ("Orange juice", "1l", "5$", "7–14°C", "Orange");

myCafe.showCafeInfo();
myCafe.orderDrink(latte);
myCafe.orderDrink(lemonade);
myCafe.orderDrink(tea);
myCafe.orderDrink(juice);




