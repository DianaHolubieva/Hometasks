// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function  areaRectangle(a, b){
    let res = a * b;
    return res;
}

let answer = areaRectangle(15,20);
console.log(answer);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function  areaCircle(r){
    let res = r * r * 3.14;
    return res;
}

let answer = areaCircle(25);
console.log(answer);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function  areaCylinder(h, r){
    let res = 2 * 3.14 * h * r;
    return res;
}

let answer = areaCylinder(15,20);
console.log(answer);

// - створити функцію яка приймає масив та виводить кожен його елемент

function arr(array){
    for (const item of array) {
        console.log(item);

    }
}

let base = [
    {product: 'orange'},
    {product: 'banana'},
    {product: 'strawberry'},
    {product: 'apple'}
];

arr(base);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function h1Creator(text = 'qwerty'){
    document.write(`<h1>${text}</h1>`);
}

h1Creator();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreator(text = 'qwerty'){
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

ulCreator();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulCreator(text = 'qwerty'){
    for (let amount = 0; amount < 3; amount++) {
        document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
    }
}

ulCreator();

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr(array){
    for (const item of array) {
        document.write(`<ul>
                         <li>${item}</li>   //список отображается, а єлементы - нет
                     </ul>`);

    }
}

let base = [
    {num1: 10},
    {bool: false},
    {product: 'strawberry'},
    {num2: 17}
];

arr(base);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arr(array){
    for (const item of array) {
        document.write(`<div> ${item.id}, ${item.name}, ${item.age}</div>`);

    }
}

let base = [
    {id:1, name: 'vasya', age: 19},
    {id:2, name: 'petya', age: 29},
    {id:3, name: 'valya', age: 39},
    {id:4, name: 'petunia', age: 49}
];

arr(base);

// - створити функцію яка повертає найменьше число з масиву

function minNumber  (num1, num2, num3) {
     if (num1 < num2 && num1 < num3){
         console.log(num1);
         return num1;
     }else if (num2 < num3 && num2 < num1){
         console.log(num2);
         return num2;
     }else{
         console.log(num3);
         return num3;
     };
 };

minNumber(8,15,52);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array = [1,2,3];
function plus(arr){
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
};

let sumeOfNumbers = plus(array);
console.log(sumeOfNumbers);