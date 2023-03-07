// let user = {
//     name: 'Vladimir',
//     lastName: 'Zaycev'
// }
// alert(user.name)
//--------------------------------------------------------------------------------
// let fruit = prompt ("Какой фрукт купить?", "apple")
// let vegetaibles = "cucumber"
// let tea = "princese noure"
// let bag = {
//     [fruit]:5,
//     [vegetaibles]: 20,
//     [tea]:10
// }
// console.log(bag)
//-------------------------------------------------------------------------------
//      ВЫВОД В КОНСОЛЕ
//Object { apple: 5, cucumber: 20, "princese noure": 10 }
// apple: 5
// cucumber: 20
// "princese noure": 10
// <prototype>: Object { … }

//-------------------------------------------------------------------------------
// let fruit = prompt("Какой фрукт купить ?", "cucmber")
// let vegetaibles = 'cucumber'
// let tea = 'princess noire'
// let bag = {}
// bag[fruit] = 5;
// bag[vegetaibles] = 10;
// bag[tea] = 23;
// console.log(bag);

//-------------------------------------------------------------------------------
// let fruit = 'apple';
// let bag = {
//   [fruit + 'ZALUPERF']: 5 // bag.appleComputers = 5
// };
// alert(bag.appleZALUPERF)

//-----------------------ФУНКЦИЯ ДЛЯ ОБЪЕКТА--------------------------------------------------------
// function OurUser(name, lastName){
//     return {
//     //     name: name,  тоже самое что и запись ниже
//     //     lastName: lastName,
//         name,
//         lastName,
//     }
// }
// let user = OurUser('Vladimir', 'Zaycev')
// alert(user.name)

//---------------------------------СОЗДАНИЕ ПУСТОГО ОБЪЕКТА----------------------------------------------
// let user = {}
// user.name = 'Vladimir sdfsdf'
// user.lastname = 'Zaycev'
// user.age = 22
// user.workplace = 'RPTP'
// alert(user.name)
//-------------------------------Проверка существования свойства, оператор «in»----------------------------------------
// let user = {}
// user.name = 'vladimir'
// user.lastname = 'zaycev'
// alert('lastname' in user)
//---------------------------------------Цикл "for..in"------------------------------------------------------------------------
// let user = {}
// user.name = 'Vladimir'
// user.lastname = 'Zaycev'
// user.age = 22
// for(let key in user){

//     //Для вывода ключей
//     alert(key)
//     // Для вывода значения по ключу
//     alert (user[key])
// }
// чтобы вывести в том порядке, в котором мы забивали нужно добавть "+", иначе порядок будет
// выводится в порядке возрастания ключей
// let telephoneCodes = {
//     "7":"Russia",
//     "1":"American",
//     "4912":"Ryazan"
// } 
// for(let key in telephoneCodes){
//     alert(telephoneCodes[key])
// }
//------------------------------------------------------------------------------------------------------------------
//----------------------------------ЗАДАЧИ LEARNJS--------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

// let user = {}
// user.name = 'John'
// user.surname = 'Smith'               //Верно____
// user.name - 'Smith'
// delete user.name
// console.log(user)
//_________________________________________________________________________________________
// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// Должно работать так:
// let schedule = {}
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// let obj = {}
// function isEmpty(obj){
//     for(let key in obj){
//        return false                 //Верно____
//     }
//     return true
// }
// alert(isEmpty(obj))
//_________________________________________________________________________________________
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования 
//всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for( let key in salaries){       //Верно____             
//     sum += salaries[key]
// }
// alert(sum)
//_________________________________________________________________________________________

// Создайте функцию multiplyNumeric(obj),
// которая умножает все числовые свойства объекта obj на 2.
// Например:
// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать.
//  Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// function multiplyNumeric(menu){
//     for(let key in menu){
//         if(typeof menu[key] == "number"){      //Верно____  
//            menu[key]*=2;
//         }
//     }
//     console.log(menu);
// }  
// multiplyNumeric(menu)
//_____________________________Копирование объектов и ссылки_____________________________________

// let user = { name: "John" };
// let admin = user; // копируется ссылка
// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
// alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"
 //_________________________________________________________________________________________________________

//  let user = {
//     name: 'Vladimir',
//     age: 30
//  }
//  let clone = {
//  }
//  for(let key in user){
//     clone[key] = user[key]
//  }
//  clone.name = 'jhone'
// console.log(clone);
//_________________________________________________________________________________________________________
// let user = { name: 'Vladimir'}
// let userLastName = { lastName: 'Zaycev'}
// let userAge = {age: 22}
// Object.assign(user, userLastName, userAge)
// console.log(user);
//_________________________________________________________________________________________________________
// let user = {}
// user.name = 'Vladimir'
// user.age = 23
// user.worlPlace = 'RPTP'
// let cloneUser = Object.assign({}, user)
// cloneUser.name = 'Jhone'
// console.log(cloneUser)
//_________________________________________________________________________________________________________







