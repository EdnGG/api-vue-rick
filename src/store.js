import Vue from 'vue'
import Vuex from 'vuex'
//import axios from "axios";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: "",
    characters: [],
    page: 1

  },
  mutations: {
    setName: function (state, Name) {
      state.name = Name;
    },
    setCharacters: function (state, Characters) {
      state.characters = Characters;
    },
    setPage: function (state, Page) {
      state.page = Page;
    },

  },
  actions: {
    setCharacters: function (context, characters) {
      context.commit('setCharacters', characters);
    },
    setName: function (context, Name) {
      context.commit('setName', Name);
    },
    setPage: function (context, Page) {
      context.commit('setPage', Page);
    },
  }
})

export default store
