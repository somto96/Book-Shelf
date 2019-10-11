export default {
  setBooks: (state, books) => (state.books = books),
  saveLater: (state, savedBook) => state.readLater.push(savedBook),
  setNow: (state, setNow) => state.readNow.push(setNow),
  killBook(state, book){
    // let target = state.books.items.find(book)
    let index = state.books.items.indexOf(state.books.id === book.id);
    // state.books.items.splice(index, 1);
    let deletedBook = state.books.items.splice(index, 1);
    state.books = deletedBook;
  }
};
