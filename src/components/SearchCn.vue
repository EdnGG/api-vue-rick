<template>
  <b-container class="search">
    <b-row class="text-center">
      <div v-for="character of characters" v-bind:key="character.id">
        <b-card
          v-bind:title="character.location.name"
          v-bind:img-src="character.image"
          v-bind:img-alt="character.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <template v-slot:header>
            <h4 class="mb-0">{{character.name}}</h4>
          </template>
          <b-card-sub-title>{{character.origin.name}}</b-card-sub-title>

          <b-card-text>{{character.name}}</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <div>
          <b-button
            size="lg"
            variant="success"
            v-on:click="fetch"
            type="button"
            class="pb-2 pt-2 mt-3 mb-3"
          >Next Page</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
//import api from "../fetch-api/api.js";

export default {
  name: "search-cn",
  data: function() {
    return {
      characters: [],
      URL: "https://rickandmortyapi.com/api/character",
      page: 1,
      pages: 1
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    // api.getInfo(this.URL)
    fetch() {
      axios
        .get(this.URL)
        .then(res => {
          this.characters = res.data.results;
          console.log(res.data);
          this.pages = res.data.info.pages;
          console.log(this.pages);
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }
};
</script>

<style scoped>
.search {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>