// const arr = [2, 4, 56, 78, 0]
// alert(arr.sort())

// const arr2 = [22, 33, 4, 1, 5]
// arr2.sort()
// alert(arr2)

// const map = new Map();
// map.set('x', 88)
// map.set('y', 99)
// console.log(map);
// const map2 = new Map([['x', 99], ['y', 88]])
// console.log(map2);


// _______________________Метод splice __________________________
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.

// let arr = ['I\'m', 'lerning', 'Js']
// arr.splice(2,1,'English');
// console.log(arr); // Array(3) [ "I'm", "lerning", "English" ]
// arr.splice(1,1)
// console.log(arr); //[ "I'm", "Js" ]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");


// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
// let arr = [1,4,5,6,7]

// arr.splice(1,0,2,3)
// console.log(arr);

// _______________________Метод slice __________________________
            // arr.slice([start], [end])

// Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива. 

// Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.


// let arr = [1,2,3,4,5,6]

// alert(arr.slice(0,5)) //1,2,3,4,5 он не возвращает последний элемент
// alert(arr.slice(0,6)) //выведет все элементы
// alert(arr.slice(-2) ) //от -2 индекса до выведет 5,6

// _______________________Метод concat __________________________

// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// Синтаксис:

// arr.concat(arg1, arg2...)

// let arr = [1,2]
// // console.log(arr.concat([3,4])) //Array(4) [ 1, 2, 3, 4 ]
// console.log(arr.concat([3,4,5,['dsd'], ['asas',123]])) //1

// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: Array [ "dsd" ]
// 6: Array [ "asas", 123 ]


// Но если массивоподобный объект имеет специальное свойство Symbol.isConcatSpreadable, то он обрабатывается как массив, с помощью concat: вместо него добавляются его элементы:

// Если в объекте в формате ключ записвно напрмер name, или lastname, то при конкатинации будет выводить без этих значений

// Array(4) [ 1, 2, <2 empty slots> ]

// let arr = [1,2]

// let objs = {
//     0:'Vladimir',
//     1:'Zaytsev',
//    [Symbol.isConcatSpreadable]: true,
//    length:2
// }

// console.log(arr.concat(objs));

// // [ 1, 2, "Vladimir", "Zaytsev" ]

// _______________________ПереборFOR_EACH_________________________

// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item
//   });

// let arr = ['Бильбо', 'Гендальф', 'Назгул']
// arr.forEach(alert)

// let arr= [12,12,12,12]
// let faf = [].concat(...arr);
// alert(faf)


//________________________Поиск в массиве______________________

// Теперь рассмотрим методы поиска в массиве.
// indexOf/lastIndexOf и includes

// У методов arr.indexOf и arr.includes одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

//     arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.
//     arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.

// Обычно эти методы используются только с одним аргументом: искомым item. По умолчанию поиск ведется с начала.

// Например:


// let arr = [1, 0, false]
// // alert(arr.indexOf(false))
// // alert(arr.includes(22))

// let fruits = ['Яблоко', 'dfdf', 'Яблоко']

// alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
// alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')

// Метод includes правильно обрабатывает NaN

// Незначительная, но заслуживающая внимания особенность includes – он правильно обрабатывает NaN, в отличие от indexOf:

// const arr = [NaN]

// alert(arr.indexOf(NaN))
// alert(arr.includes (NaN))

// ________________________find и findIndex/findLastIndex______________________
// Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?

// Здесь пригодится метод arr.find.

// Синтаксис:

// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
//   });

// Функция вызывается по очереди для каждого элемента массива:

//     item – очередной элемент.
//     index – его индекс.
//     array – сам массив.

// let users = [
//     {
//         id:0,
//         name:'Vldaimir'
//     },
//     {
//         id:1,
//         name:'Anton'
//     },
//     {   
//         id:2,
//         name:'Samokat'
//     }
    
// ];

// let user = users.find(item => item.id === 1)
// alert(user.name)

// let apples = [
//     {id:1, name:'green apple'},
//     {id:2, name:'red apple'},
//     {id:3, name: 'orange apple'}
// ]

// let ourApple = apples.findIndex(function(item) {return item.name === 'orange apple'})
// тоже само что и 
// let ourApple = apples.find(item => item.id === 3)
// alert(ourApple.name)


// ________________________ffilter______________________

// Метод find ищет один (первый) элемент, который заставит функцию вернуть true.

// Если найденных элементов может быть много, можно использовать arr.filter(fn).

// Синтаксис схож с find, но filter возвращает массив из всех подходящих элементов:

// let results = arr.filter(function(item, index, array) {
//   // если `true` -- элемент добавляется к results и перебор продолжается
//   // возвращается пустой массив в случае, если ничего не найдено
// });

// let apples = [
//     {id:1, name:'green apple'},
//     {id:2, name:'red apple'},
//     {id:3, name: 'orange apple'}
// ]



// Написать фнкцию, которая выводит элементы массива заканчивающее на букву r


// let names = ['vladimir','vanton', 'gleb']

// function filterString(item){
//    if(item.slice(-1) === 'r'){
//     return true
//    }
// }
// let name = names.filter(filterString)
// alert(name)


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


// function filterNumb (numb){
//     for(let i = 2; numb > i; i++){
//         if(numb % i == 0){
//             return false
//         }
//     }    
//   return numb > 1 
// }

// console.log(array.filter(filterNumb));

//____________________________Фильтрация неверных записей в JSON

// В следующем примере метод filter() используется для создания отфильтрованного JSON-объекта, все элементы которого содержат ненулевое числовое поле id.

// let arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     { },
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
//   ]
  
// function sortArr(number){
//     if(Number.isFinite(number.id) && !number.id ==0 ){
//         return true
//     }
//    return false
// }

// console.log(arr.filter(sortArr))

//Такая же запись, только короче 
// let sortArr = (number) => Number.isFinite(number.id) && !number.id == 0 
// console.log(arr.filter(sortArr));


//Поиск в массиве

// В следующем примере filter() используется для фильтрации содержимого массива на основе входных данных.

// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// const filterArray = (query) =>{
//    return fruits.filter(item => item.toLowerCase().indexOf(query) > -1)
// }
// console.log(filterArray('ap'));

// const filterOurArray = (arr, query) => {
// return arr.filter(item => item.toLowerCase().indexOf(query) !== -1)
// }
// alert(filterOurArray(fruits, 'nana'))

// function filterArr (arr, query){
//     return arr.filter(
//         function(item){
//          return item.toLowerCase().includes(query)
//         }
//     ) 
// }
// alert(filterArr(fruits, 'app'))

// let userId = [
//     {id: 1},
//     {id: 2},
//     {id: 4},
//     {},

// ]

// function userIdFilter(item){
//      if (Number.isFinite(item) || item.id > 0){
//         return true
//      }
// }

// console.log((userId.filter(userIdFilter))
// )

 
// Модификация изначального массива (изменение, добавление и удаление)

// В следующих примерах проверяется поведение метода filter при изменении массива.

// let words = ['spray', 'limit', 'exuberant', 'destruction','elite'] 


//____________________________________________________________________ МОДИФИКАЦИЯ
// const modifWords = words.filter( (word, index, arr) => {
//     arr[index +1] += 'extra'
//     console.log(arr[index]);
//     return  word.length < 6
// })

// console.log(modifWords);

// words.push('new')
// console.log(words);

// const newWords = words.filter((item, index, arr) => {
//     arr.push('new')
//     return item.includes('new')
// })

// console.log(newWords);


//__________________________________________________________________Удаление элементов 

// const deleteWords = words.filter((item, index, arr) =>{
//     arr.pop()
//     return item.includes('sp') 
// })

// console.log(deleteWords);



// ______________________________________________________SPLIT AND JOININ________________

// str.split([separator[, limit]])


// let ourNambers = ['Вася, Петя, Маша']

// // let arrNumber = ourNambers.split('')
// // // console.log(arrNumber);
// // for (let item of arrNumber){
// //     console.log(item);
// // }

// // console.log(ourNambers.split('' ))
// console.log(ourNambers.join(';'));


// function splitAndJoin(ourStr, separator){
//     var modifidetStr = ourStr.split(separator)
//     console.log('Изначальная строка' + ourStr +'\n'+ 'Измененная строка' +'\n'+ modifidetStr);
// }

// var firstStr = 'я сегодн явесь день пьяный'
// var secondSctr ='a,b,c,d,e,f,j'
// var arrStr = ['я все еще пьяный']

// var comma = ','
// var space = ' '

// splitAndJoin(firstStr,space)

//_____________________________________________________УДАЛЕНИЕ ПРОБЕЛОВ ИЗ СТРОКИ

// var myStr = 'я сегодня пошел за , не зннаю чем, может быть и нужен пробел , или нет';

// var delSpace =/\s* , \s*/

// var newStr = myStr.split(delSpace)
// console.log(newStr);

//__________________________________________________________Конвертируем цикл for в forEach

// let items = ['item1', 'item2', 'item3']

// // let ourItems = []

// items.forEach((item) => {
//   console.log(item);
// }
// )
// alert(ourItems)


// ____________________________________________________reduce/reduceRight___________

// Когда нам нужно перебрать массив – мы можем использовать forEach, for или for..of.

// Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать map.

// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. Они используются для вычисления единого значения на основе всего массива.

// Синтакси

// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);

// Аргументы:

// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sumArr = arr.reduce((sum, value) => 
//    sum + value
// )

// alert(sumArr)

// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга

// var friends = [
// { name: ["Anna"], books: ["Bible", "Harry Potter"], age: [21] },
// { name: ["Bob"], books: ["War and peace", "Romeo and Juliet"], age: [26] },
// { name: ["Alice"], books: ["The Lord of the Rings", "The Shining"], age: [18] }
// ]

// // allbooks - список, который будет содержать все книги друзей +
// // дополнительный список указанный в initialValue

// var allbooks = friends.reduce(function (prev, current) {
// return  [...prev, ...current.age]
// } , [])

// // allbooks.join(';')

// console.log(allbooks);




//_____________________________________________________MAP__________________

// Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления и конструирует новый массив из результатов её вызова. Функция callback вызывается только для индексов массива, имеющих присвоенные значения, включая undefined. Она не вызывается для пропущенных элементов массива (то есть для индексов, которые никогда не были заданы, которые были удалены или которым никогда не было присвоено значение.

// Если в метод map был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined. В конечном итоге, значение this, наблюдаемое из функции callback, определяется согласно обычным правилам определения this, видимого из функции.

// Метод map не изменяет массив, для которого он был вызван (хотя функция callback может это делать).

// Диапазон элементов, обрабатываемых методом map, устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода map, не будут посещены функцией callback. Если существующие элементы массива изменяются функцией callback, их значения, переданные в функцию, будут значениями на тот момент времени, когда метод map посетит их; удалённые элементы посещены не будут.

// const ser = '123345'

// const reserved  = Array.prototype.map.call(ser, (x) => x).reverse().join('')
// console.log( reserved);


// const myArr = ['1','2','3']

// const result = (elem) => parseInt(elem, 10)

// const newArr = myArr.map(result)

// console.log(newArr);

// let arr = [5, 3, 8, 1]

// let filtered = (arr, a, b) => {
//   return  arr.filter(function(item){
//      return (item >=a && item <=b)
//     })
// }
// console.log(filtered(arr, 1, 4))
// console.log(filtered);


// ___________________________________________ЗАДАЧА № 1 ________________________________

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры: camelize("list-style-image") == 'listStyleImage';


// let camelize = (str) => {
//     return str.split('-')
// }
// console.log(camelize("list-style-image")); 
// ___________________________________________ЗАДАЧА № 2 ________________________________
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

//  let filterRangeInPlace =  (arr , a ,b) => {
//     for(let i = 0; i< arr.length; i++ ){
//         let val = arr[i]
    
//         if (val < a || val > b){
//             arr.splice(i, 1)
//             i++;
//         }
//     }
// }

// // _______________________________Через фильтр _______________________________________

// let filterRangeInPlace = (arr, a, b) => {
//     arr.filter((item, index) => {
//         if(item < a || item > b){
//             arr.splice(index, 1)
//             index++
//         }
//     }) 
// }

// let arr = [5, 3, 8, 1]
// filterRangeInPlace(arr, 1, 4)
// console.log(arr);

//__________________________________Сортировать в порядке по убыванию___________

// let arrs = [5, 2, 1, -10, 8]
// let sortArrs = arrs.sort((a,b) => b-a)
// alert(sortArrs)

// __________________________________Скопировать и отсортировать массив___________

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = (arr) => {
//  return arr.slice().sort()
// }

// alert( sorted(arr) ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


// __________________________________Создать расширяемый калькулятор___________

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

//     Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

//     Пример использования:

//  let calc = new Calculator;

//  function Calculator() { 
//    this.method = { 
//     "+":(a,b) => a+b,
//     "-":(a,b) => a-b
//    };

//    this.calucate = function(str){
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
//         return this.method[op](a, b)
//    };

//     this.addMethod = function (name, func){
//     this.method[name] = func
//    }
//  }
//     let multiplication = new Calculator;
//     multiplication.addMethod("**", (a, b) => a ** b);

//     let result = multiplication.calucate("2 ** 3");
//     alert( result ); // 8

//     console.log(calc);

//_________________________________ Трансформировать в массив имён___________________

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)
// alert(names)

//_________________________________ Трансформировать в массив имён___________________
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }))

// console.log(user);

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// ___________________________________________________________________________

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr){
//     arr.sort((a,b) => a.age > b.age ?   1 : -1 )
// }

// ___________________________________________________________________________

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users){
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length
// }


// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function uniq(str) {
//     result = [] 
//     for(let item of str){
//         if(!result.includes(item)){
//             result.push(item)
//         }1 
//     }
//     return result
// }
// alert(uniq(strings))
// ___________________________________________________________________________

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  

//   /*
//   // после вызова у нас должно получиться:
  
//   usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }
//   */

// let objUsers = (array) => {
//     return array.reduce((obj, value) => {
//         obj[value.age] = value
//         console.log(obj);
//         return obj
//     }, {})}
// console.log(objUsers(users));


// function camelize(str){
//     return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// }
// console.log(camelize("-webkit-transition"));


// Фильтрация по диапазону
// важность: 4

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1]

// let filtered = (arr, a, b) => { 
//   return  arr.filter((elem, index) => {
//         if(elem >= a && elem <=b)
//         return elem
//         index ++   
//     })
    
// }
// console.log(filtered(arr, 1, 5));
// alert(arr)

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]



// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//     let elemAr = arr[i]
//     if (elemAr < a || elemAr > b){
//         arr.splice(i, 1);
//         i--;
 
// }
// }

// filterRangeInPlace(arr, 1, 4)
// console.log(arr);


// let arr = [5, 3, 8, 1];
// let filterRangeInPlace = (arr, a, b) => {
   //____________________________________________________________________Важное решение!
//   return arr.filter(item=> item > a && item < b)
// }
// console.log(arr);
// console.log(filterRangeInPlace(arr, 1,10));

// let arr = [5, 2, 1, -2, 3]

// let sort = (arr) => {
//    return arr.sort((a,b)=> a-b)
// }
// console.log(sort(arr));

// let arr = ["HTML", "JavaScript", "CSS"];

//  let sorted = copySorted(arr);
// function copySorted(arr){
//   return arr.slice().sort()
// }



// console.log(sorted);

// console.log(arr);


// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = (arr) => {
//  return arr.map(item => item.name)
// }
// // console.log(users);

// console.log(names(users));



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = (arr) => {
//     return arr.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}))
// }

// console.log(usersMapped(users));
// let vasyas = { name: "Вася", age: 0 };
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha, vasyas ];



// let sortByAge = (arr) => {
//   return arr.sort((a,b)=> a.name - b.name )}

// console.log(sortByAge(arr));

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let getAverageAge = (arr) => {
 return arr.reduce((acc, item) => acc + item.age, 0) / arr.length}

console.log(getAverageAge(arr));