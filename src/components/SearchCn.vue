<template>
  <div class="main-container">
    <HeaderCn />
    <!-- checar aqui -->
    <b-container class="text-center main">
      <b-row class="text-center mt-5">
        <b-col cols="12" md="6" v-for="character of characters" v-bind:key="character.id">
          <!-- <div class="text-center"> -->
          <b-card
            v-bind:img-src="character.image"
            v-bind:img-alt="character.name"
            img-top
            class="mb-2"
          >
            <template v-slot:header>
              <h4 class="mb-0">{{character.name}}</h4>
            </template>
            <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card>
                <p class="card-text">{{character.name}}</p>
                <!-- <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button> -->
                <!-- <b-collapse id="collapse-1-inner" class="mt-2">
                  <b-card>{{character.name}}</b-card>
                </b-collapse>-->
              </b-card>
            </b-collapse>

            <!-- <b-button @click="modalShow = !modalShow">More Information</b-button> -->
          </b-card>

          <!-- <template>
            <b-modal v-model="modalShow">{{character.name}}</b-modal>
          </template>-->
          <!-- </div> -->

          <!-- Modal -->

          <!--  / Modal -->
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
      modalShow: false
    };
  },
  computed: {
    ...mapState(["characters", "id"])
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
    // showCharacter() {
    //   // this.$root.fetch();
    //   this.$store.dispatch("showCharacter", showCharacter);
    //   console.log(this.$root.fetch());
    //   console.log("is working");
    // }
    // async fetchCharacter(id) {
    //   let result = await axios.get(
    //     `https://rickandmortyapi.com/api/character/${id}`
    //   );
    //   this.currentCharacter = result.data;
    //   this.modal = true;
    //   console.log("Personaje " + this.currentCharacter);
    // }
  }
};
</script>

<style scoped>
.main-container {
  /* display: grid;
  place-items: center; */

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