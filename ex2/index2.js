// Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. 
// Возвращает новую отсортированную строку, максимально длинную, содержащую 
// различные буквы (каждая из которых взята только один раз) из s1 или s2.
// Примеры:

// а = "xyaabbbccccdefww"
// б = "xxxxyyyyabklmopq"
// самый длинный (a, b) -> "abcdefklmopqwxy"

// а = "abcdefghijklmnopqrstuvwxyz"
// самый длинный (а, а) -> 
// "abcdefghijklmnopqrstuvwxyz
//var strw = 'qwertyuiop';

// console.log(strw); 
// let strw = "qwertyuiop";
// function full (strw){
//      alert(strw)
// }
// let ourfunct = (strw) => alert(strw.split('').reverse().join(''));
// ourfunct(strw);

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// function sortStrin(a,b){
    
// }
// console.log(sortStrin(a,b))
const returnInt = (element) => parseInt(element, 2);

alert(['0100011', '0100101', '0101010'].map(returnInt))