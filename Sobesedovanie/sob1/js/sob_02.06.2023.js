//02.06.2023 - Начало практики собеса

// 1.
// Написать функцию, которая определяет, является ли строка палиндромом.Написать

// Примеры палиндромов:
// - Казак
// - А роза упала на лапу Азроа

// Ограничение по памяти 0(1)

function isEquals(str1, str2) {
  return str1.toLowerCase() !== str2.toLowerCase();
}
function isLetter(char) {
  return char.toLowerCase() === char.toUpperCase();
}

function isPalindrom(str) {
  //метод двух указателей
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    const firstChar = str[start];
    const endChar = str[end];
    if (!isLetter(firstChar)) {
      start += 1;
      continue;
    }
    if (!isLetter(firstChar)) {
      end -= 1;
      continue;
    }

    if (!isEquals(firstChar, endChar)) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}
