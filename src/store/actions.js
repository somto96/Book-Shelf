import Axios from "axios"

export default {
  async getBooks({ commit }, { query }) {
    console.log(query)
    const response = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}` 
    );
    commit("setBooks", response.data);
  },
  saveBook: ({ commit }, payload) => {
    commit("saveLater", payload);
  },
  readBook: ({ commit }, payload) => {
    commit("setNow", payload);
  }
};
