import { cardsList } from "./data.js";
const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".product-cards");
let countValue = prompt("Сколько карточек отобразить? От 1 до 5");
let count = Number(countValue);
if (count < 1 || count > 5 || isNaN(count)) {
    alert("Ошибка! Введите число от 1 до 5.");
    count = cardsList.length;
};

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

cardsList.slice(0, count).forEach(card => {
    const cardClone = cardTemplate.content.cloneNode(true);
    const compositionList = cardClone.querySelector(".product-card__composition-list");
    cardClone.querySelector(".product-card__image").src = card.img;
    cardClone.querySelector(".product-card__subtitle").textContent = card.subtitle;
    cardClone.querySelector(".product-card__title").textContent = card.title;
    cardClone.querySelector(".product-card__description").textContent = card.description;
    card.composition.forEach((compound) => {
        const li = document.createElement("li");
        li.textContent = compound;
        li.classList.add("product-card__item");
        compositionList.append(li);
    });
    cardClone.querySelector(".product-card__price").textContent = card.price + " ₽";
    const btn = cardClone.querySelector('.product-card__action');
    btn.addEventListener('click', () => { 
        const cardBody = btn.closest('.product-card__content').querySelector('.product-card__inner');
        cardBody.style.backgroundColor = changeRandomColor();
    })
    cardList.appendChild(cardClone);
});

const productDescription = cardsList.reduce((acc, current) => {
    acc[current.title] = current.description;
    return acc;
},{});