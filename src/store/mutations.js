export default {
  setBooks: (state, books) => (state.books = books),
  saveLater: (state, savedBook) => state.readLater.push(savedBook),
  setNow: (state, setNow) => state.readNow.push(setNow)
};
