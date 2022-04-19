'use strict';

let word1 ='hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7
let num7 = 16;
let bool1 = true;
let bool2 = false;


console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool1);
console.log(bool2);


alert(word1);
alert(word2);
alert(word3);
alert(word4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(bool1);
alert(bool2);

document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);
document.write(num5);
document.write(num6);
document.write(num7);
document.write(word1);
document.write(word2);
document.write(word3);
document.write(word4);
document.write(bool1);
document.write(bool2);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let book = { //требует const
    title : 'qwerty',
    numbOfPgs: 123,
    genre : 'horror',
    writers : {
        name1 : 'petya',
        name2 : 'vasya'
    }
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let firstName = 'Golubeva';
let middleName = 'Diana';
let lastName = 'Romanovna';

let person = firstName + middleName + lastName;


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let name = prompt('Please enter your name');
let lastName = prompt('Please enter your last name');
let age = prompt('Please enter your age');

console.log(name, lastName, age);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



let a = 100;
let b = '100';
let c = true;

typeof a;
typeof b;
typeof c;


console.log(typeof a, typeof b, typeof c);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let collection = [
    {title : 'qwerty1', numbOfPgs: 123, genre : 'horror', writerName : 'petya'},
    {title : 'qwerty2', numbOfPgs: 123, genre : 'horror', writerNAme : 'vasya'},
    {title : 'qwerty3', numbOfPgs: 123, genre : 'horror', writerName : 'petya'},
    {title : 'qwerty4', numbOfPgs: 123, genre : 'horror', writerNAme : 'vasya'}
];

console.log(collection[0]);
console.log(collection[1]);
console.log(collection[2]);
console.log(collection[3]);




