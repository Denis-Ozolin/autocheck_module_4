// Задание 36
// К нам обратилась владелица лавки зелий «У старой жабы»
// и заказала программу для ведения инвентаря - добавления, удаления,
// поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions,
// значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//     potions: [],
//   // Пиши код выше этой строки
// };

// Задание 37
// Добавь объекту atTheOldToad метод getPotions(),
// который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    
//     getPotions() {
//         return this.potions;
//     },
//   // Пиши код выше этой строки
// };

// Задание 38
// Дополни метод addPotion(potionName) так,
// чтобы он добавлял зелье potionName в конец массива зелий
// в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//       this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// Задание 39
// Дополни метод removePotion(potionName) так,
// чтобы он удалял зелье potionName из массива зелий
// в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//       this.potions.splice(this.potions.indexOf(potionName), 1);
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// Задание 40
// Дополни метод updatePotionName(oldName, newName) так, 
// чтобы он обновлял название зелья с oldName на newName,
// в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//       this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// Задание 41
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
// но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов
// со следующими свойствами:

// { name: 'Дыхание дракона', price: 700 }.

// Выполни рефакторинг методов объекта atTheOldToad так,
//     чтобы они работали не с массивом строк, а с массивом объектов.

//     getPotions() - метод для получения всех зелий.
// Возвращает значение свойства potions.
//     addPotion(newPotion) - добавляет зелье newPotion(уже объект)
// в массив в свойстве potions.
//     removePotion(potionName) - удаляет объект зелья с именем potionName из массива
// в свойстве potions.
//     updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья
// с названием oldName на newName в массиве potions.

const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],

    //Пиши код ниже этой строки
    getPotions() {
        return this.potions;
    },
  
    addPotion(newPotion) {   
            if (this.potions.includes(newPotion)) {
                return `Зелье ${newPotion.name} уже есть в инвентаре!`;
        }
         this.potions.push(newPotion);
    },

        removePotion(potionName) {
            for (let i = 0; i < this.potions.length; i += 1) {
                if (this.potions[i].name === potionName) {  
                this.potions.splice(i, 1); 
                return;
            }          
        } 
        return `Зелья ${potionName} нет в инвентаре!`;
    },
  
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1){
            if (this.potions[i].name === oldName) {
                this.potions[i].name = newName;   
            }     
        }
        return `Зелья ${oldName} нет в инвентаре!`;
    },
    // Пиши код выше этой строки    
}


// atTheOldToad.getPotions();
// [ { name: 'Зелье скорости', price: 460 },
// { name: 'Дыхание дракона', price: 780 },
// { name: 'Каменная кожа', price: 520 } ].


// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// console.log(atTheOldToad.potions);
// // в массиве potions последним элементом будет этот объект.

// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// console.log(atTheOldToad.potions);
// в массиве potions последним элементом будет этот объект.


// atTheOldToad.removePotion('Дыхание дракона');
// console.log(atTheOldToad.potions);

// [{ name: 'Зелье скорости', price: 460 },
// { name: 'Каменная кожа', price: 520 }].

// atTheOldToad.removePotion('Зелье скорости');
// console.log(atTheOldToad.potions);


// [{ name: 'Дыхание дракона', price: 780 },
// { name: 'Каменная кожа', price: 520 }].

// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// console.log(atTheOldToad.potions);

// [{ name: 'Зелье скорости', price: 460 },
// { name: 'Полиморф', price: 780 },
// { name: 'Каменная кожа', price: 520 }].

// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.log(atTheOldToad.potions);

// [{ name: 'Зелье скорости', price: 460 },
// { name: 'Дыхание дракона', price: 780 },
// { name: 'Зелье неуязвимости', price: 520 }].