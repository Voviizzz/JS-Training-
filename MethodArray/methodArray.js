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
//         if(numb % i ==0){
//             return false
//         }
//     }    
//   return numb > 1 
// }

// console.log(array.filter(filterNumb));