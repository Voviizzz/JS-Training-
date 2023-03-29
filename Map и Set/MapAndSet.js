// Map

// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:

//     new Map() – создаёт коллекцию.
//     map.set(key, value) – записывает по ключу key значение value.
//     map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
//     map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
//     map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
//     map.clear() – очищает коллекцию от всех элементов.
//     map.size – возвращает текущее количество элементов.

let recipeMap = new Map([
  ["Огурец", 124],
  ["Помидор", 350],
  ["Лук", 50],
]);

// for(let vegetables of recipeMap.keys()){
//     alert(vegetables)
// }

// for(let vegetables of recipeMap.values()){
//     alert(vegetables)
// }

// for(let entry of recipeMap.entries()){
//     alert(entry)
// }

// recipeMap.forEach((value, key, map) => {
//     alert(`${key} : ${value}`)
// })

// let user = {
//     name: 'Jhon',
//     age: 20
// }

// let map = new Map(Object.entries(user))

// console.log(map.get('name'));

// let prices = Object.fromEntries([
//   ["banana", 1],
//   ["orange", 2],
//   ["meat", 4],
// ]);

// alert(prices.banana);

// let map = new Map()
// map.set('cucmber', 1)
// map.set('orange', 2 )
// let obj = Object.fromEntries(map)
// console.log(obj);
// console.log( map);

// ____________________________________ЗАДАЧИ________________

function unique(arr) {
  let set = new Set(arr);
  for (let value of set) {
    set = set.add(value);
  }
  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let aclean = (arr) => {
//     let map = new Map();
//     for(let word of arr){
//         let sorted = word.toLowerCase().split('').sort().join('')
//         map.set(sorted,word)
//     }
//     return Array.from(map.values())
// }
// console.log(aclean(arr));


// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys())

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// const map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');

// const iterator1 = map1.keys();


// console.log(iterator1.next().value);
// // Expected output: "0"

// console.log(iterator1.next().value);
// // Expected output: 1
