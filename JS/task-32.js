// Задание
// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.
// Это число должно быть первым параметром функции.
// function addOverNum(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// Пиши код ниже этой строки
function addOverNum(num, ...args) {
  let total = 0;
    for (const arg of args) {
        if (arg > num) { 
        total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

