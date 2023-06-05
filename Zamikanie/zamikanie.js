// //замыкание
// // function crateCalcFunction(n) {
// //   return function () {
// //     console.log(100 + n);
// //   };
// // }
// // const calc = crateCalcFunction(42)
// // calc()
// // 142 произошло замыкание

// // function createIncrementor(n) {
// //   return function (num) {
// //     return n + num;
// //   };
// // }
// // const addOne = createIncrementor(1)
// // const addTen = createIncrementor(10)

// // console.log(addTen(10));

// // function urlGenerator(domain) {
// //   return function (url) {
// //     return `https://${url}.${domain}`;
// //   };
// // }
// // const comUrl = urlGenerator("com");
// // const ruUrl = urlGenerator("ru");

// // console.log(comUrl("google"));
// // console.log(ruUrl('yandex'));

// // ЗАДАЧА ПОВЫШЕННОЙ СЛОЖНОСТИ

// // НАПИСАТЬ ФУНКЦИЮ BIND
// // ПРИМЕР РАБОТЫ:

// //Функция для вывода Person
// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}
//     `);
// }
// //Объект персон
// const person1 = { name: "Михаил", age: 22, job: "Frontend" };
// const person2 = { name: "Елена", age: 19, job: "SMM" };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// //берем контекст и функцию
// function bind(context, fn){
//     //возвращаем функцию с множеством аргументов
//     return (function(...args){
//         // метод apply берет функцию и
//         fn.apply(context, args)
//     })
// }

// let names = ['Jhon', 'Pette']

// let name = 'Jhon'

// function sayHi(name){
//     return function(){
//         console.log(`Hi ${name}`);
//     }
// }
// let hiJhon = sayHi('jhon')
// hiJhon()

// function getByFullName(firstname, lastname){
//      function getFullName(){
//        return firstname + " " + lastname;
//     }
// }
// console.log('hello' + getFullName() );

//функция-конструктор возвращает новый объект
// function User(name) {
//   //методом объекта становится вложенная функция
//   this.sayHi = function () {
//     alert(name);
//   };
// }
// let user = new User("Jhonn");

// user.sayHi();

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

// Такой возможности нет: count – локальная переменная функции, мы не можем получить к ней доступ извне.
// Для каждого вызова makeCounter() создаётся новое лексическое окружение функции, со своим собственным count. Так что получившиеся функции counter – независимы.

let ourCouner = counter();
let ourCouner1 = counter();
alert(ourCouner());
alert(ourCouner());
alert(ourCouner1());
alert(ourCouner1());

// Блоки кода и циклы, IIFE

// Предыдущие примеры сосредоточены на функциях. Но лексическое окружение существует для любых блоков кода {...}.
// область видимости так же распостраняется на блоки кода ьакте как for, while, if

let userName = "John";
let userNumber = 25;
userNumber = 24;
