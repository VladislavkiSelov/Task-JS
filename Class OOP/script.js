// Сделайте класс Circle, который будет описывать круг.
// Передайте в параметр конструктора радиус круга.Запишите его в приватное свойство.
// Сделайте метод, который будет возвращать площадь круга.
// Сделайте метод, который будет возвращать длину окружности.

// class Circle {
//     #radius
//     constructor(radius) {
//         this.#radius = radius;
//     }
//     returnAreaCircle() {
//         return (this.#radius ** 2) * 3.14
//     }
//     returnLengthCircle() {
//         return (this.#radius * 3.14) * 2
//     }
// }


// Сделайте класс Rectangle, в котором в свойствах будут записаны ширина и высота прямоугольника.
// В классе Rectangle сделайте метод getSquare, который будет возвращать площадь этого прямоугольника.
// В классе Rectangle сделайте метод getPerimeter, который будет возвращать периметр этого прямоугольника.
// В классе Rectangle сделайте метод getRatio, который будет возращать площадь, деленную на периметр.

// const circle = new Circle(5);
// console.log(circle.returnAreaCircle());
// console.log(circle.returnLengthCircle());

// class Rectangle {
//     constructor(height, width) {
//         this.height = height
//         this.width = width
//     }
//     getSquare() {
//         return this.width * this.height;
//     }
//     getPerimeter() {
//         return (this.height + this.width) * 2
//     }
//     getRatio() {
//         return this.getSquare() / this.getPerimeter()
//     }
// }
// const rectangle = new Rectangle(5, 5);
// console.log(rectangle.getSquare());
// console.log(rectangle.getPerimeter());
// console.log(rectangle.getRatio());

// Сделайте класс Text, который будет выполнять некоторые манипуляции над текстом.Пусть текст передается параметром конструктора.

// class Text {
//     constructor(str) {
//         this.str = str;
//     }
//     returnNumberSymbol() {
//         let check = /[^a-zA-Z0-9А-Яа-я ]{1,}/g;
//         let result = this.str.match(check);
//         return result.join('').length;
//     }
//     returnNumberLetters() {
//         let check = /[a-zA-ZА-Яа-я]{1,}/g;
//         let result = this.str.match(check);
//         return result.join('').length;
//     }
//     returnNumberSpace() {
//         let check = /\s{1,}/g;
//         let result = this.str.match(check);
//         return result.join('').length;
//     }
//     returnNumberSpace() {
//         let check = /\s{1,}/g;
//         let result = this.str.match(check);
//         return result.join('').length;
//     }
//     returnArrayWords() {
//         let result = this.str.split(' ');
//         return result;
//     }
// }
// const text = new Text("1231#$ орфывор дфывадшлфы hjh 687%$%$^");
// console.log(text.returnNumberSymbol());
// console.log(text.returnNumberLetters());
// console.log(text.returnNumberSpace());
// console.log(text.returnArrayWords());


// Сделайте класс Zate, который будет представлять собой дату.Пусть конструктор этого класса параметрами принимает год, месяц и день даты.
// class Zate {
//     constructor(year, mounth, day) {
//         this.year = year;
//         this.mounth = mounth;
//         this.day = day;
//     }
//     returnYear() {
//         return this.year;
//     }
//     returnMounth() {
//         return this.mounth;
//     }
//     returnDay() {
//         return this.day;
//     }
// }
// const zate = new Zate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
// console.log(zate.returnYear());
// console.log(zate.returnMounth());
// console.log(zate.returnDay());



// Сделайте класс ZateExt, который будет наследовать от класса Zate из предыдущего урока и расширять его некоторыми методами.
// class Zate {
//     constructor(year, mounth, day) {
//         this.year = year;
//         this.mounth = mounth;
//         this.day = day;
//     }
//     returnYear() {
//         return this.year;
//     }
//     returnMounth() {
//         return this.mounth;
//     }
//     returnDay() {
//         return this.day;
//     }
// }
// const zate = new Zate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

// class ZateExt extends Zate {
//     constructor(year, mounth, day) {
//         super(year, mounth, day)
//     }
//     addDayDay() {
//         return this.day + 5;
//     }
//     addMounth() {
//         return this.mounth + 2;
//     }
// }
// const zateExt = new ZateExt(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
// console.log(zateExt.addDayDay());
// console.log(zateExt.addMounth());
