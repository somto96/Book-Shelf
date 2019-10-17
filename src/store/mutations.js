export default {
  setBooks: (state, books) => (state.books = books),
  saveLater: (state, savedBook) => state.readLater.push(savedBook),
  setNow: (state, setNow) => state.readNow.push(setNow),
  killBook(state, book){
    var result = state.books.items.findIndex(e => e.id === book.id);
    state.books.items.splice(result, 1);
    return state.books;
  }
};
