// function User(name, lastname){
//     this.name = 'Vladimir'
//     this.isAdmin = false
//     this.lastname = 'zaycev'
// }
// let user1 = new User('Vladimir','Zaytsev')
// let user2 = new User('Max','Lobach')
// console.log(user1);

// function User(name){
//     this.name = name,
//     this.itsmyName = function(){
//         alert('HelloWorld! My name is' + ' ' +this.name)
//     };
// }
// let VladimirUser = new User('Vladimir')
// VladimirUser.itsmyName()

// Создайте функцию-конструктор Calculator, 
//которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи 
//и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.

// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//________________Создание конструктора калькулятора___________________________________
// function Calculator(){
//     this.read = function(){
//     this.a =+prompt('a?',0)
//     this.b =+prompt('b?',0)
//     },
//     this.sum = function(){
//         return this.a + this.b
//     },
//     this.mul = function(){                              //ВЕРНО
//         return this.a * this.b
//     }
// }

// let calculator = new Calculator();
// calculator.read()
// alert('sum ='+ ' '+ calculator.sum())
// alert('mul ='+ ' '+ calculator.mul())
//________________Создайте new Accumulator___________________________________
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// //     Хранить «текущее значение» в свойстве value. 
// Начальное значение устанавливается в аргументе конструктора startingValue.
// //     Метод read() должен использовать prompt для 
// считывания нового числа и прибавления его к value.

// // Другими словами, свойство value представляет собой 
// умму всех введённых пользователем значений, с учётом начального 
// значения startingValue.

// // Ниже вы можете посмотреть работу кода:

// // let accumulator = new Accumulator(1); // начальное значение 1

// // accumulator.read(); // прибавляет введённое пользователем значение к 
// текущему значению
// // accumulator.read(); // прибавляет введённое пользователем значение к 
// текущему значению

// alert(accumulator.value); // выведет сумму этих значений
// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value +=+prompt('enter a number', 0)
//     }
// }
// let accumulator = new Accumulator(2);
// alert(accumulator.read())
// alert(accumulator.read())
// console.log(accumulator.value);