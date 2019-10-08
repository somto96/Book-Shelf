import Axios from "axios"

export default {
  async getBooks({ commit }, { query }) {
    console.log(query)
    const response = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}` 
    );
    commit("setBooks", response.data);
  }
};
