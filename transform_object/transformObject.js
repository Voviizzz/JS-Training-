//_________________________________ Object.keys, values, entries

// Для простых объектов доступны следующие методы:

//     Object.keys(obj) – возвращает массив ключей.
//     Object.values(obj) – возвращает массив значений.
//     Object.entries(obj) – возвращает массив пар [ключ, значение].

// let user = {
//   name: "vladimir",
//   age: 20,
// };

// for(let val of Object.values(user)){
//     console.log(val);
// }

// ______________________________Трансформации объекта

// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:

//     Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
//     На нём вызываем методы массива, например, map.
//     Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

// let prices = {
//   banan: 20,
//   apple: 30,
//   orange: 10,
// };

// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices.orange);

//_________________________________ЗАДАЧИ________________________________________

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

//   let sumSalaries = (salaries) => {
//     let sum = 0;
//    for(let val of Object.values(salaries)){
//      sum += val;
//    }
//    return sum
//   }


// let sumVal = (obj) => {
//   return Object.values(salaries).reduce((a,b) => a+b, 0)
// };

// console.log(sumVal(salaries)); // 650
// ______________________________________ЗАДАЧА 2______________________________________

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// function count(user){
//   return Object.keys(user).length
// }



// alert( count(user) ); // 2