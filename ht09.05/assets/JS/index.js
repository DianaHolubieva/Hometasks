// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user2 = new User(2, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user3 = new User(3, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user4 = new User(4, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user5 = new User(5, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user6 = new User(6, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user7 = new User(7, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user8 = new User(8, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user9 = new User(9, 'vasya', 'grup', 'vasya@gmail.com', 572993489);
let user10 = new User(10, 'vasya', 'grup', 'vasya@gmail.com', 572993489);

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = (array) => array.filter(value => value.id % 2 === 0);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = (array) => array.sort((a, b) => a.id - b.id);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

const cli1 = new Client(1, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 2);
const cli2 = new Client(2, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 8);
const cli3 = new Client(3, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 4);
const cli4 = new Client(4, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 7);
const cli5 = new Client(5, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 9);
const cli6 = new Client(6, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 67);
const cli7 = new Client(7, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 90);
const cli8 = new Client(8, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 1);
const cli9 = new Client(9, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 43);
const cli10 = new Client(10, 'vasya', 'grup', 'vasya@gmail.com', 572993489, 0);

let clients = [cli1. cli2, cli3, cli4, cli5, cli6, cli7, cli8, cli9, cli10];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrders = (array) => array.sort((a,b) => a.order - b.order);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model, manufacturers, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturers = manufacturers;
    this.year = year;
    this. maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive = (maxSpeed) => {
        console.log(`${maxSpeed}`);
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info = (model, manufacturers, year, maxSpeed, engineCapacity) => {
        console.log (`${model} - model, ${manufacturers} - manufacturers, ${year} - year, ${maxSpeed} - maxSpeed, ${engineCapacity} - engineCapacity`);
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed = (newSpeed) => {
        this.newSpeed = newSpeed;
        newSpeed = maxSpeed + x;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear = (newValue) => {
        this.newValue = newValue;
        newValue = yyyy;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    const driver = {
        name: 'bob'
    }

    addDriver = (driver) => {
        Car.push(driver);
    }


}

let car = new Car('xxx', '6008', 5, 250, 200);

increaseMaxSpeed(45);
changeYear(5009);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car {
    constructor (model, manufacturers, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturers = manufacturers;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive = (maxSpeed) => {
        console.log(`${maxSpeed}`);
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info = (model, manufacturers, year, maxSpeed, engineCapacity) => {
        console.log (`${model} - model, ${manufacturers} - manufacturers, ${year} - year, ${maxSpeed} - maxSpeed, ${engineCapacity} - engineCapacity`);
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed = (newSpeed) => {
        this.newSpeed = newSpeed;
        newSpeed = maxSpeed + x;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear = (newValue) => {
        this.newValue = newValue;
        newValue = yyyy;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    const driver = {
        name: 'bob'
    }

    addDriver = (driver) => {
        Car.push(driver);
    }


};

let car = new Car('xxx', '6008', 5, 250, 200);

increaseMaxSpeed(45);
changeYear(5009);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку