// let str = 'Я хороший программист'
// alert(str.indexOf('Я'))

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// ___________________includes, startsWith, endsWith________________________

// alert('Я хороший программист'.includes('Я')) //проверяет есть ли подстрока 

// Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:

// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — оконча

// _______________________Получение подстроки__________________________________

// В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.
// str.slice(start [, end])
//     Возвращает часть строки от start до (не включая) end.
//     Например:

// let str = 'ourstring'
// alert(str.slice(0))

// 'ourstr', символы от 0 до 6 (не включая 6)
// Если аргумент end отсутствует, 

// // slice возвращает символы до конца строки: //'ourstring'
// str.substring(start [, end])

//     Возвращает часть строки между start и end (не включая) end.

//     Это — почти то же, что и slice, но можно задавать start больше end.
//     Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.

// let str = 'ourstring'
//  alert(str.substring(1,7)) //urstri

//____________________________ Сравнение строк________________________________

// Как мы знаем из главы Операторы сравнения, 
// строки сравниваются посимвольно в алфавитном порядке.

// Тем не менее, есть некоторые нюансы.

//     Строчные буквы больше заглавных

// str.codePointAt(pos)

//     Возвращает код для символа, находящегося на позиции pos:

// // одна и та же буква в нижнем и верхнем регистре
// // будет иметь разные коды
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// let str = ''
// for (let i = 65; i <= 100; i++){
//     str += String.fromCodePoint(i)
// }
// alert(str)

// ____________________ЗАДАЧИ________________________________________________
// function ucFirst(str){
//  return str[0].toUpperCase() + str.slice(1)
// }
// alert(ucFirst('vova'))

// function checkSpam(str){
//   let lowerStr = str.toLowerCase()
//   return lowerStr.includes('xxx') || lowerStr.includes('porn')
// }
// alert(checkSpam('porn'))

// alert('sddfdf'.slice(1,5))

// function truncate(str, maxlength){
//   return (str.length > maxlength) ? 
//    str.slice(0, maxlength - 1) + '...' : str;
// }
// alert(truncate('adfdfdfdfdfdfddfdfdfdfdfdf',13)) 
 

// function extractCurrencyValue(str){
//     return +str.slice(1) 
// }
// alert( extractCurrencyValue('$120') === 120 );

// extractCurrencyValue = (str) => +str.slice(1)
// alert( extractCurrencyValue('$120') === 120 );