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
let strw = "qwertyuiop";
// function full (strw){
//      alert(strw)
// }
let ourfunct = (strw) => alert(strw.split('').reverse().join(''));
ourfunct(strw);