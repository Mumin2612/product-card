// (Homework-5) (Задание №1) Пройден тест отправлен в репозиторий

// (Homework-5) (Задание №2) Создан файо homework-5.js добавлен в html

// (Homework-5) (Задание №3): Функи которая выводит город и градус
const city = "Варшава";
const temperature = 3;

function showCityTemperature(city, temperature) {
    console.log("Сейчас в " +  city  +  " температура " +  temperature + " градусов по Цельсию"); 
};
showCityTemperature(city, temperature);

// (Homework-5) (Задание №4): Функция котрая сравнивает скорость света с задданым аргументом.    
const SPEED_OF_LIGHT = 299792458;

function checkLightSpeed(light) {
    if (light > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (light < SPEED_OF_LIGHT) {
        console.log("Субсветовая  скорость");
    } else {
        console.log("Скорость света");
    };
};
checkLightSpeed(299792459);

// (Homework-5) (Задание №5): Функция которая сравнивает бюджет и лимит. 
const accessory = "Айфон 15"; 
const price = 3500; 

function checkPurchase(budget) {
    if (budget >= price) {
        console.log(accessory + " приобретен. Спасибо за покупку!");
    } else {
        const difference = price - budget
        console.log(`Вам не хватает ${difference} пополните баланс.`);
    };
};
checkPurchase(3100);

// (Homework-5) (Задание №6) Создать функцию и именовать на свое усмотрение 
function verifyAge(ageVerification) {
    const age = 18;
    if (ageVerification >= age) {
        console.log("Добро пожаловать");
    } else  {
        console.log("Вы являетесь несовершеннолетним");
    };      
};
verifyAge(18);

// (Homework-5) (Задание №7) Создать 3 переменных 
const fullName = "Mumin Suleimanov";
const countryAndCity = "Poland, Warszawa";
const address = "Aleja kwakowska 82";

console.log(fullName);
console.log(countryAndCity);
console.log(address);
