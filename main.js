import './homework-5.js';
import './comments.js'
import './homework-7.js';
import './homework-8.js';
import './products-data.js'
import './homework-9.js';
import './homework-10.js';
import './homework-11/homework-11.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// Получаем элементы управления из DOM
const cardRecolorButton = document.querySelector(".product-section__action-all");
const resetColorCard = document.querySelector('.product-section__reset');
export const modalRegistration = new Modal("#modalRegistration")
const openBtn = document.querySelector(".footer__register-btn")
export const registrationForm = new Form("#registrationForm");

openBtn.addEventListener("click", () => {
    modalRegistration.open();
})

// Генерирует случайный цвет для фона карточек
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
}

// Сбрасывает фон всех карточек к состоянию по умолчанию
resetColorCard.addEventListener("click", () => {
    const currentCards = document.querySelectorAll(".product-card__inner");
    currentCards.forEach(body => {
        body.style.backgroundColor = "";
    });
});

cardRecolorButton.addEventListener("click", () => {
    const allCards = document.querySelectorAll(".product-card__inner");
    allCards.forEach(body => {
        body.style.backgroundColor = changeRandomColor();
    });
});

// Выводит текст заголовка страницы в консоль при наведении
const headerOutput = document.querySelector(".js-title");
headerOutput.addEventListener("mouseover", () => {
    console.log(headerOutput.innerText);
});

// Переключает состояние кнопки и отображает активный / неактивный статус
let toggleButton = document.querySelector(".product-section__toggle");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("is-active");

    if (toggleButton.classList.contains("is-active")) {
        toggleButton.innerText = "НЕ АКТИВНО";
    } else {
        toggleButton.innerText = "АКТИВНО";
    };
});