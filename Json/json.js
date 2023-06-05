// JavaScript предоставляет методы:

//     JSON.stringify для преобразования объектов в JSON.
//     JSON.parse для преобразования JSON обратно в объект.

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

// let json = JSON.stringify(student)

// alert(json)

// Полный синтаксис JSON.stringify:

// let json = JSON.stringify(value, [replacer, space])

// value
//     Значение для кодирования.
// replacer
//     Массив свойств для кодирования или функция соответствия function(key, value).
// space
//     Дополнительное пространство (отступы), используемое для форматирования.

// Использование reviver

// Представьте, что мы получили объект meetup с сервера в виде строки данных.

// Вот такой:

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// // let meetup = JSON.parse(str)
// // console.log(meetup); // НЕ ПРАВИЛЬНО ДАТА НЕ ПРЕОБРАЗУЕТСЯ !

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date")
//     return new Date(value);
//     return value;

// });
// console.log(meetup);

// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
//   }`;

// let meetup = JSON.parse(schedule, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup);

// __________________________________ЗАДАЧИ________________________________

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// let json = JSON.stringify(user)
// console.log(json);

// let str = JSON.parse(json)
// console.log(str);

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;

  console.log(room);
  
console.log(JSON.stringify(meetup, (key,value) => key && value == meetup ? undefined: value ));  



  /*
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */