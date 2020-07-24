import Vue from 'vue'
import Vuex from 'vuex'
//import axios from "axios";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: "",
    characters: [],
    page: 1,
    nextPage: true,
    prevPage: false,
    //id: null

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
    nextPage: function (state, nextPage) {
      state.nextPage = nextPage
    },
    prevPage: function (state, prevPage) {
      state.prevPage = prevPage
    },
    // showCharacterInfo: function (state, showCharacter) {
    //   state.id = showCharacter
    // }

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
    nextPage: function (context, nextPage) {
      context.commit('nextPage', nextPage)
    },
    prevPage: function (context, prevPage) {
      context.commit('prevPage', prevPage)
    },
    // showCharacterInfo: function (context, showCharacter) {
    //   context.commit("showCharacter", id)
    // }
  }
})

export default store