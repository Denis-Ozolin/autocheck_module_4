// Задание
// Дополни метод updateBook(oldName, newName) так,
// чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива,
// и splice() для того чтобы заменить этот элемент.

const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
      const indexForRemove = this.books.indexOf(oldName);
      this.books.splice(indexForRemove, 1, newName);
      
    //   this.books.splice(this.books.indexOf(oldName), 1, newName);
    // Пиши код выше этой строки
  },
};

bookShelf.updateBook('Мгла', 'Хроники подземелий');
console.log(bookShelf.books);

bookShelf.updateBook('Последнее королевство', 'Дюна');
console.log(bookShelf.books);


