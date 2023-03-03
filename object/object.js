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
function OurUser(name, lastName){
    return {
    //     name: name,  тоже самое что и запись ниже
    //     lastName: lastName,
        name,
        lastName,
    }
}
let user = OurUser('Vladimir', 'Zaycev')
alert(user.name)
  