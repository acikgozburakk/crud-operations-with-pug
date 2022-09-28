import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    baseurl: "https://jsonplaceholder.typicode.com",
    postList: [],
  },
  mutations: {
    setposts(state, post) {
      state.postList = post;
    },
  },
  actions: {
    getpost({ commit, state }) {                                     
      axios
        .get(`${state.baseurl}/posts`).then((get_response) => {
          commit("setposts", get_response.data);
        }).catch(e => console.log("error", e))
    },
  },
  getters: {
    postlist: (state) => state.postList,
  }
})
