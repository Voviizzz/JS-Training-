// let sym = Symbol.for('name')
// let sym2 = Symbol.for('id')
// alert(Symbol.keyFor(sym))

// let sym1 = Symbol.for('id')
// let sym = Symbol.for('id')
// console.log(sym1 === sym ? true:false)

// для вывода Id
// let sym = Symbol('id')
// alert(sym.description)

// Символы позволяют создавать «скрытые» свойства объектов, 
// к которым нельзя нечаянно обратиться и перезаписать 
// их из других частей программы.
// Например, мы работаем с объектами user, 
// которые принадлежат стороннему коду. 
// Мы хотим добавить к ним идентификаторы.
// Используем для этого символьный ключ:

// let id = Symbol("id");
// let user = {
//     name: "Вася",
//     [id]:1,
//     age:30,
// };
// // user[id]=1
// // user2[id]=2
// for(let key in user){
//     alert(user[key])
// }
//________________________Можно клонировать и свойства перйдут______________

// let id = Symbol("id");
// let user = {
//   [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] ); // 123