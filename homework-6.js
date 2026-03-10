// homework-6 задание 1: Пройден тест результат отправлен в PR 
// homework-6 задание 2: Созлан новый файл JS подключен в html
// homework-6 задание 3: создание объекта на основе данных. 
const myProfile = {
    name: "Mumin",
    surname: "Suleimanov",
    age: 22,
    gmail: "muminsulaymonov5@gmail.com",
    position: "Student",
    job: "unemployed",
    country: "Poland",
    city: "Warszawa",
    address: "Aleja-Jerezeolimskiego"
};

// homework-6 задание 4: Создание объекта который хранит данные автомобиля. 
const characteristicCar = {
    brand: "BMW",
    model: "BMW i5 M60 xDrive",
    year: 2023,
    color: "Black",
    gearbox: "automatic"
};
characteristicCar.owner = myProfile;

// homework-6 задание 5: функция устанавливает "определенное свойство" если его нет. 
function setMaxSpeedIfMissing(characteristicCar) {
    if (!("maxSpeed" in characteristicCar)) {
        characteristicCar.maxSpeed = 390;
    }
}
setMaxSpeedIfMissing(characteristicCar);

// homework-6 задание 6: Функция которая получает объект и аргумент и выводит его значение 
function showObjectProperty(obj, field) {
    console.log(obj[field]);
};
showObjectProperty(characteristicCar, "brand");

// homework-6 задание 7: Создание массива который содержит продукты
const fruitBasket = [
    "banana",
    "pear",
    "apple",
    "plum"
];

// homework-6 задание 8: Cоздание массива, состоящий из объектов (книги-развития). 
const literatureBooks = [ 
    {
        title: "Атомные привычки",
        author: "Джеймс Клир",
        year: 2020,
        coverColor: "white",
        genre: "literature"
    },
    {
        title: "Самый богатый человек в Вавилоне",
        author: "Джордж Самюэль Клейсон",
        year: 1926,
        coverColor: "red",
        genre: "literature"
    },
    {
        title: "НЕ ТУПИ",
        author: "Джен Синсеро",
        year: 2020,
        coverColor: "red",
        genre: "literature"
    }
];
literatureBooks.push({
        title: "НЕ НОЙ",
        author: "Джен Синсеро",
        year: 2019,
        coverColor: "black",
        genre: "literature"
});

// homework-6 задание 9: Cоздание массива, состоящий из объектов (книги-фантастики). 
const thrillerBooks = [
    {
        title: "Особо опасен",
        author: "Джона Ле Карре",
        year: 2009,
        coverColor: "hardcover",
        genre: "novel" 
    },
    {
        title: "Внутри убийцы",
        author: "Майка Омер",
        year: 2018,
        coverColor: "hardcover",
        genre: "novel" 
    },
    {
        title: "Брокер ",
        author: "Джона Гришэм",
        year: 2005,
        coverColor: "blue",
        genre: "novel" 
    },
];

const allBooks = [...literatureBooks, ...thrillerBooks];

// homework-6 задание 10: Практика с методом массива map. 
function getBooksWithRareMark(books) {
    const updatedBooks = books.map(function (book) {
        return {
            ...book,
            isRare: book.year >= 2015
        };
    });
    return updatedBooks;
};
const updateBooks = getBooksWithRareMark(allBooks);