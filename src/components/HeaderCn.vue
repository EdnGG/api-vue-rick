<template>
  <div class="header">
    <b-container fluid="md">
      <div class="text-center pb-5">
        <b-img
          class="image"
          src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/08/21/rick-morty.jpg"
          fluid
          alt="Rick And Morty"
        ></b-img>
        <h1 class="title">Made it with Vue</h1>
      </div>
    </b-container>
    <b-container class="button">
      <b-row class="text-center">
        <b-col>
          <div class="button">
            <b-input-group class="button">
              <b-form-input
                placeholder="Search..."
                v-model="searchQuery"
                @keyup.enter="getApiCharacter"
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-secondary" @click="getApiCharacter">Go</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  name: "header-cn",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    getApiCharacter() {
      //aqui cambio los states y llamo al api
      this.$store.dispatch("setPage", 1);
      this.$store.dispatch("setName", this.searchQuery);
      this.$root.fetch();
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Shadows+Into+Light&display=swap");

html {
  background-color: black;
}

@media only screen and (min-width: 600px) {
  h1 {
    padding-top: 20px;
    margin-top: 20px;
    color: red;
    font-size: 10px;
  }
}
@media only screen and (max-width: 600px) {
  h1 .title {
    padding-top: 20px;
    margin-top: 20px;
    color: red;
    font-size: 10px;
  }
}

h1 {
  padding-top: 20px;
  margin-top: 20px;
  color: green;
}
.button {
  color: green;
}
.header {
  background-color: black;
  padding-top: 20px;
  margin-top: 20px;
  font-family: gloria hallelujah;
}
.image {
  // width: 800px;
  // height: 500px;
  border-radius: 50px;
}

// @import "../components/scss/main.scss";
</style>