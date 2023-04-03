// Деструктурирующее присваивание

// В JavaScript есть две чаще всего используемые структуры данных – это Object и Array.

//     Объекты позволяют нам создавать одну сущность, которая хранит элементы данных по ключам.
//     Массивы позволяют нам собирать элементы данных в упорядоченный список.

// let arr = [ "Ilya", "Vladimirovich"]

// let [firstName, lastName] = arr

// alert(firstName)

// let [firstName , lastName] = "Ilya Kantor".split(" ")
// alert(firstName)

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let [firstName, ,title] = arr

// alert(title)// Consul

// Мы можем использовать что угодно «присваивающее» с левой стороны.

// Например, можно присвоить свойству объекта:

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// alert(user.name); // Ilya
// alert(user.surname); // Kantor

// let user = {
//   name: "Vladimir",
//   lastaname: "Zaycev",
// };

// for (let [key, value] of Object.entries(user)) {
//   alert(`${key}: ${value}`);
// }

// То же самое для MAP

// let user = new Map()
// user.set('name', 'Jhon')
// user.set('lastname', 'milkish')

// for(let[key, value] of user){
//     alert(`${key}: ${value}`)

// }

// _____________________________//ТРЮК ОБМЕНА ДАННЫМИ

// let guest = "jane";
// let admin = "Pete";

// [guest,admin] = [admin, guest]

// alert(`${guest} ${admin}`);

//_________________________________Остаточные параметры «…»

// Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.

// Например, здесь берутся только первые два элемента, а остальные просто игнорируются:

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

// let [name1, name2, ...rest] = arr

// console.log(rest[0]);
// alert(arr)

//__________________________________ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ_________

// let [name = prompt("Введите имя"), surname = prompt("Введите фмалию")] = ['vova']

// //name будет по дефолту вова, а фамилия из prompt

//____________________________________Деструктуризация объекта

// Деструктурирующее присваивание также работает с объектами.

// Синтаксис:

// let {var1, var2}= {var1:..., var2:...}

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// // let [title, width, height] = options

// let [title, width, height] = {
//   title: "Menu",
//   width: 200,
//   height: 250,
// };

// console.log(options);

// Умные параметры функций

// Есть ситуации, когда функция имеет много параметров, большинство из которых не обязательны. Это особенно верно для пользовательских интерфейсов. Представьте себе функцию, которая создаёт меню. Она может иметь ширину, высоту, заголовок, список элементов и так далее.

// Вот так – плохой способ писать подобные функции:

// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   // ...
// }

// МЫ МОЖЕМ ПЕРЕДАТЬ ПАРАМЕТРЫ КАК ОБЪЕКТ И ФУНКЦИЯ ДЕСТРУКТУРИРУЕТ ЕГО В ПЕРЕМЕННЫЕ

// let options = {
//   title: "my menu",
//   items: ["Item1, Item2"],
// };

// function showMenu({
//   title = "Undefined",
//   width = 200,
//   height = 400,
//   items = [],
// }) {
//   alert(`${title}, ${width}, ${items}`);
// }
// showMenu(options);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100,  // width присваиваем в w
//   height: h = 200, // height присваиваем в h
//   items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
// }) {
//   alert( `${title} ${w} ${h}` ); // My Menu 100 200
//   alert( item1 ); // Item1
//   alert( item2 ); // Item2
// }

// showMenu(options);

// ___________________________ИТОГО_________________________________

// Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.

// Полный синтаксис для объекта:

// let {prop : varName = default, ...rest} = object

// Cвойство prop объекта object здесь должно быть присвоено переменной varName. Если в объекте отсутствует такое свойство, переменной varName присваивается значение по умолчанию.

// Свойства, которые не были упомянуты, копируются в объект rest.

// Полный синтаксис для массива:

// let [item1 = default, item2, ...rest] = array

// Первый элемент отправляется в item1; второй отправляется в item2, все остальные элементы попадают в массив rest.

// // Можно извлекать данные из вложенных объектов и массивов, для этого левая сторона должна иметь ту же структуру, что и правая.

// Деструктурирующее присваивание
// важность: 5

// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// Напишите деструктурирующее присваивание, которое:

//     свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

//________________________________ЗАДАЧИ_________________________________

// let user = {
//   name: "Jhon",
//   years: 30,
// };

// let {name, years: age, isAdmin = false} = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// function topSalary(salaries) {
//   let max = 0;
//   let name = null;
//   for (let [key, value] of Object.entries(salaries)) {
//     if(max < value){
//       max = value
//       name = key
//     }
//   }
//   return console.log(name);
// }
// topSalary(salaries)

// function topSalary(salaries) {
//   let [nameTop, top] = [null, 0];
//   for (let [name, topSalary] of Object.entries(salaries)) {
//     if(top<topSalary){
//       top = topSalary
//       nameTop = name
//     }
//   }
//   return console.log(nameTop);
// }
// topSalary(salaries);
