<template>
  <div class="main-container">
    <HeaderCn />
    <!-- checar aqui -->
    <b-container class="text-center main">
      <b-row class="text-center mt-5">
        <b-col cols="12" md="6" v-for="character of characters" v-bind:key="character.id">
          <b-card
            v-bind:img-src="character.image"
            v-bind:img-alt="character.name"
            img-top
            class="mb-2"
          >
            <template v-slot:header>
              <h4 class="mb-0">{{character.name}}</h4>
            </template>
            <b-button v-b-toggle="'collapse-'+character.id" variant="primary">Details</b-button>
            <b-collapse :id="'collapse-'+character.id" class="mt-2">
              <b-card>
                <b-card-sub-title class="mb-2">Status: {{character.status}}</b-card-sub-title>
                <b-card-sub-title class="mb-2">Specie: {{character.species}}</b-card-sub-title>
                <b-card-sub-title class="mb-2">Type: {{character.type}}</b-card-sub-title>
                <b-card-sub-title class="mb-2">Gender: {{character.gender}}</b-card-sub-title>
                <b-card-sub-title class="mb-2">Location: {{character.location.name}}</b-card-sub-title>
              </b-card>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="search-pagination text-center">
        <b-col>
          <b-nav tabs align="center" role="navigation" aria-label="pagination" class="pagination">
            <b-nav-item v-on:click="changePage(page -1)" :disabled="!$store.state.prevPage">Preview</b-nav-item>

            <b-nav-item>{{page}}</b-nav-item>

            <b-nav-item v-on:click="changePage(page + 1)" :disabled="!$store.state.nextPage">Next</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from "axios";
import HeaderCn from "./HeaderCn";
import { mapState } from "vuex";
export default {
  name: "search-cn",
  data: function() {
    return {
      page: 1,
      pages: 1,
      modal: false,
      // currentCharacter: "",
      modalShow: false,
      id: ""
    };
  },
  computed: {
    ...mapState(["characters"])
  },
  components: {
    HeaderCn
  },
  created() {},
  methods: {
    changePage(page) {
      this.page = page;
      this.$store.dispatch("setPage", page);
      this.$root.fetch();
      console.log("Valor de this.page " + this.page);
    }
  }
};
</script>

<style lang="scss">
.main-container {
  /* display: grid;
  place-items: center; */
  background-color: black;
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
  background-color: black;
  margin-top: 6%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>