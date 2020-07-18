import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchQuery2: ""
  },
  mutations: {
    fetch() {
      const params = {
        page: this.page,
        name: this.searchQuery2
      };
      axios
        // { params } for sending type query params
        //  "https://rickandmortyapi.com/api/character/?page=<>"
        .get(this.URL, { params })
        .then(res => {
          this.characters = res.data.results;
          console.log(res.data);
          this.pages = res.data.info.pages;
          console.log(this.pages);
          console.log(` hello there ${name}`);
        })
        .catch(err => {
          console.error(err.message);
        });
    },
    searchCharacter(searchQuery) {
      this.page = 1;
      this.fetch(), console.log(searchQuery);

    },
    test() {
      console.log('hello')
    },
    getApiCharacter(searchQuery2) {
      this.page = 1;
      // this.search,
      this.fetch(), console.log(searchQuery2);
      console.log("saludos ");
    }
  },



})

export default store
