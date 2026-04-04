import { products } from "./products-data.js";

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".product-container");

function changeRandomColor() {
  const colors = [
    "rgba(0, 31, 90, 0.3)",
    "rgba(242, 255, 0, 0.3)",
    "rgba(0, 234, 183, 0.3)",
    "rgba(0, 255, 38, 0.3)",
    "rgba(255, 91, 91, 0.3)",
    "rgba(168, 17, 255, 0.85)",
    "rgba(0, 255, 38, 0.3)",
    "rgba(207, 0, 214, 0.3)",
    "rgba(0, 29, 192, 0.3)",
    "rgba(222, 122, 0, 0.3)"
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

function renderCards(products) {
  products.forEach(card => {
  const cardClone = cardTemplate.content.cloneNode(true);
  const compositionList = cardClone.querySelector(".product-card__composition-list");
  cardClone.querySelector(".product-card__image").src = "images/" + card.img + ".jpg";
  cardClone.querySelector(".product-card__subtitle").textContent = card.subtitle;
  cardClone.querySelector(".product-card__title").textContent = card.title;
  cardClone.querySelector(".product-card__description").textContent = card.description;
  card.composition.forEach((compound) => {
    const li = document.createElement("li");
    li.textContent = compound;
    li.classList.add("product-card__item");
    compositionList.append(li);
  });
  cardClone.querySelector(".product-card__price-text").textContent = "Цена";
  cardClone.querySelector(".product-card__price-value").textContent = card.price + " ₽";
  const btn = cardClone.querySelector('.product-card__action');
  btn.addEventListener('click', () => { 
    const cardBody = btn.closest('.product-card__content').querySelector('.product-card__inner');
    cardBody.style.backgroundColor = changeRandomColor();
  });
  cardList.appendChild(cardClone);
  });
};

function init() {
  let countValue = prompt("Сколько карточек отобразить? От 1 до 5");
  let count = Number(countValue);
  if (count < 1 || count > 5 || isNaN(count)) {
    alert("Ошибка! Введите число от 1 до 5.");
    count = 5;
  };
  renderCards(products.slice(0, count));
};
init();

const productDescription = products.reduce((acc, current) => {
  acc.push({[current.title]: current.description});
  return acc;
}, []);