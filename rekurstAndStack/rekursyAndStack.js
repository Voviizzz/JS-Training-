// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 3));

//Краткая запись рекурсии

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }
// console.log(pow(2, 3));

// Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение this (мы не используем его в данном примере) и прочую служебную информацию.

// Реализация возведения в степень итеративным методом

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * x;
//   }
//   return result; //последовательно меняются значения result и i
// }
// console.log(pow(2, 3));

//___________________РЕКУРСИВНЫЙ ОБХОД______________________________

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };

// function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//       }
//       return sum;
//     }
//   }

// console.log(sumSalaries(company));

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }
// console.log(sumTo(100));

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(100));

// function factorial(n) {
//  return n != 1 ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));

// function fibo(n) {
//   n <= 1 ? fibo(n - 1) : fibo(n - 2);
// }

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();

//выведет Pete
