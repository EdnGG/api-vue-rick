<template>
  <div class="main-container">
    <HeaderCn />
    <!-- checar aqui -->
    <b-container class="text-center main">
      <b-row class="text-center">
        <div v-for="character of characters" v-bind:key="character.id" class="text-center">
          <b-card
            v-bind:title="character.location.name"
            v-bind:img-src="character.image"
            v-bind:img-alt="character.name"
            img-top
            tag="article"
            style="max-width: 15rem;"
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
      <b-row class="search-pagination text-center">
        <b-col>
          <b-nav tabs align="center" role="navigation" aria-label="pagination" class="pagination">
            <b-nav-item v-on:click="changePage(page -1)">Preview</b-nav-item>

            <b-nav-item>{{page}}</b-nav-item>

            <b-nav-item v-on:click="changePage(page + 1)">Next</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import axios from "axios";
import HeaderCn from "./HeaderCn";
import { mapState } from "vuex";
//import api from "../fetch-api/api.js";
export default {
  name: "search-cn",
  data: function() {
    return {
      URL: "https://rickandmortyapi.com/api/character/",
      page: 1,
      pages: 1
    };
  },
  computed: {
    ...mapState(["characters"])
  },
  components: {
    HeaderCn
  },
  created() {
    //this.fetch();
  },
  methods: {
    changePage(page) {
      if (page !== 0) {
        this.page = page;
        // this.page = page <= 0 || page > this.pages ? this.page : page;
        this.$store.dispatch("setPage", page);
        this.$store.dispatch("nextPage", nextPage);
        this.$store.dispatch("prevPage", prevPage);
        this.$root.fetch();
        console.log("Valor de this.page " + this.page);
      } else if (this.page >= 31) {
        console.log("Error 1");
        page = 30;
      } else {
        console.log("Error 2");
      }
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
}
.search-pagination {
  margin-top: 6%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>