import { commentsList } from "./comments.js"; //homework-7 №5 импорт массива комментариев
// homework-7 №1 создан новый файл js добавлен в html

//homework-7 №2 создание массива сичел от 1 до 10 которая фильтрирует числа и начинается с 5. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersStartingFromFive = numbers.filter((number) => number >= 5);

//homework-7 №3 проверка существования элемента в массиве
const fruits = ["Banana", "Apple", "Orange", "Pear", "Grape"];
console.log(fruits.includes("Grape"));

//homework-7 №4 функция переворота массива
function reverseArray(array) {
    return array.slice().reverse();
}
const reversedNumbers = reverseArray(numbers);
const reversedFruits = reverseArray(fruits);

// №6 работа с ES modules
// №7 фильтрация email содержащих ".com"
const commentsWithComEmails = commentsList.filter(item => 
    item.email.includes(".com")
);
console.log(commentsWithComEmails);

//homework-7 №8 изменение postId в зависимости от id
const updatedComments = commentsList.map((item) => ({
    ...item,
    postId: item.id <= 5 ? 2 : 1
}));

//homework-7 №9 создание массива объектов только с id и name
const commentsPreview = commentsList.map((item) => ({
    id: item.id,
    name: item.name
}));

//homework-7 №10 добавление свойства isInvalid в зависимости от длины body
const commentsValidated = commentsList.map((item) => ({
    ...item,
    isInvalid: item.body.length > 180
}));

//homework-7 №11/1 получение массива email через reduce
const emailsWithReduce = commentsList.reduce((arrayEmail, item) =>  {
    return [
        ...arrayEmail,
        item.email
    ];  
}, []);

//homework-7 №11/2 получение массива email через map
const emailsWithMap = commentsList.map((item) => {
    item.email;
});

//homework-7 №12 преобразование массива email в строку
const emailsString = emailsWithReduce.toString();
const emailsStringJoin = emailsWithMap.join(" | ");
