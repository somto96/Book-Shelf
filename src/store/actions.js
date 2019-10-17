import Axios from "axios"

export default {
  async getBooks({ commit }, { query }) {
    console.log(query)
    Axios.interceptors.request.use(config => {
      NProgress.configure({ easing: "ease", speed: 100 });
      NProgress.start();
      return config;
    });
    Axios.interceptors.response.use(response => {
      NProgress.configure({ easing: "ease", speed: 100 });
      NProgress.done();
      return response;
    });
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
  },
  removeBook: ({ commit }, payload) => {
    commit("killBook", payload);
  }

};
