'use strict';


// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.

let x = +prompt('Please enter some number');

if(x !== 0){
    console.log('super');
} else {
    console.log('bad');
}

// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let  num1 = 0, num2 = 1, num3 = -3;

if(num1 !== 0){
    console.log('super');
} else {
    console.log('bad');
}

if(num2 !== 0){
    console.log('super');
} else {
    console.log('bad');
}

if(num3 !== 0){
    console.log('super');
} else {
    console.log('bad');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let x = +prompt('Please enter some number from 0 to 59');


if(x => 0 &&  15 <= x ){
    console.log('first part');
} else if(x =>16 && 30 <= x ){
    console.log('second part');
}else if(x =>31 && 45 <= x ) {
    console.log('third part');
}else{
    console.log('fourth part');
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let x = +prompt('Please enter some number from 1 to 31');

if(x => 1 &&  10 <= x ){
    console.log('first decade');
} else if(x =>11 && 20 <= x ){
    console.log('second decade');
}else{
    console.log('third decade');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('Please enter number from 1 to 7');

    switch (dayOfWeek) {
        case 'sunday':
            console.log('studying, jogging');
            break;
        case 'monday':
            console.log('studying, swimming');
            break;
        case 'tuesday':
            console.log('studying');
            break;
        case 'wednesday':
            console.log('studying, swimming');
            break;
        case 'thursday':
            console.log('studying');
            break;
        case 'friday':
            console.log('studying, scouting');
            break;
        case 'saturday':
            console.log('studying, jogging');
            break;
        default:
            console.log('don`t know');
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.



let a = +prompt('Please enter some number(a)'), b = +prompt('Please enter some number(b)');

if (a>b){
    console.log('a is bigger');
}else if (b>a){
    console.log('b is bigger');
}else if (a === b){
    console.log('a and b are the same');
}




