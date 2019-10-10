export default {
  setBooks: (state, books) => (state.books = books),
  saveLater: (state, savedBook) => state.readLater.push(savedBook),
  setNow: (state, setNow) => state.readNow.push(setNow),
  killBook(state, book){
    let index = state.books.items.indexOf(book.id);
    // state.books.items.splice(index, 1);
    state.books = [...state.books, ...state.books.items.splice(index, 1)]
  }
};
