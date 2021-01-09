const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],

    getObj() {
        console.log(this.potions[0].name)
  }
       

}

atTheOldToad.getObj();


