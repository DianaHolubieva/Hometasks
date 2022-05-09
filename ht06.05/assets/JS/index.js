// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool';
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str1 = 'hello world', str2 = 'lorem ipsum', str3 = 'javascript is cool';
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim(' ', '');
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    return str.split (' ');
}
let arr = stringToArray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let Array = [10,8,-7,55,987,-1011,0,1050,0];

let objToStr = (str) => {
    return Array.map(str);
}
let arr = Array.toString();
console.log(arr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction

let nums = [11,21,3];
let direction = prompt('please enter direction: ');

let sortNums = (direction == "-") ?  nums.sort((a, b) => b - a) : ; //не вышло . вместо первого nums.sort изначально писала reverse - тоже не работает
console.log(sortNums);

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.monthDuration.sort((a, b) => b -a)); //опять же не работает
console.log(coursesAndDurationArray.find(value => value.monthDuration > 5)); // здесь нашел первый правильный(джаву) и дальше не идет искать. цикл нужен ?


// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'space', value: '6', color:'black'},
    {cardSuit: 'space', value: '7', color:'black'},
    {cardSuit: 'space', value: '8', color:'black'},
    {cardSuit: 'space', value: '9', color:'black'},
    {cardSuit: 'space', value: '10', color:'black'},
    {cardSuit: 'space', value: 'ace', color:'black'},
    {cardSuit: 'space', value: 'jack', color:'black'},
    {cardSuit: 'space', value: 'queen', color:'black'},
    {cardSuit: 'space', value: 'king', color:'black'},
    {cardSuit: 'clubs', value: '6', color:'black'},
    {cardSuit: 'clubs', value: '7', color:'black'},
    {cardSuit: 'clubs', value: '8', color:'black'},
    {cardSuit: 'clubs', value: '9', color:'black'},
    {cardSuit: 'clubs', value: '10', color:'black'},
    {cardSuit: 'clubs', value: 'ace', color:'black'},
    {cardSuit: 'clubs', value: 'jack', color:'black'},
    {cardSuit: 'clubs', value: 'queen', color:'black'},
    {cardSuit: 'clubs', value: 'king', color:'black'},
    {cardSuit: 'heart', value: '6', color:'red'},
    {cardSuit: 'heart', value: '7', color:'red'},
    {cardSuit: 'heart', value: '8', color:'red'},
    {cardSuit: 'heart', value: '9', color:'red'},
    {cardSuit: 'heart', value: '10', color:'red'},
    {cardSuit: 'heart', value: 'ace', color:'red'},
    {cardSuit: 'heart', value: 'jack', color:'red'},
    {cardSuit: 'heart', value: 'queen', color:'red'},
    {cardSuit: 'heart', value: 'king', color:'red'},
    {cardSuit: 'diamond', value: '6', color:'red'},
    {cardSuit: 'diamond', value: '7', color:'red'},
    {cardSuit: 'diamond', value: '8', color:'red'},
    {cardSuit: 'diamond', value: '9', color:'red'},
    {cardSuit: 'diamond', value: '10', color:'red'},
    {cardSuit: 'diamond', value: 'ace', color:'red'},
    {cardSuit: 'diamond', value: 'jack', color:'red'},
    {cardSuit: 'diamond', value: 'queen', color:'red'},
    {cardSuit: 'diamond', value: 'king', color:'red'},
    {cardSuit: '', value: 'joker', color:'red'},
    {cardSuit: '', value: 'joker', color:'black'}
];
// - знайти піковий туз


let searchVal = 'ace', cardVal = cards.find(value => value.value === searchVal).value;
let searchSui = 'clubs', cardSui = cards.find(suit => suit.cardSuit === searchSui).cardSuit;

console.log(searchSui, searchVal);// не вышло

// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
