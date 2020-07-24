<template>
  <div class="header">
    <b-container>
      <div class="text-center pb-5">
        <b-img
          src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/08/21/rick-morty.jpg"
          fluid
          alt="Rick And Morty"
        ></b-img>
        <h1>Made with Vue</h1>
      </div>
    </b-container>
    <b-container>
      <b-row class="text-center">
        <b-col>
          <div>
            <b-input-group>
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
      searchQuery: ""
    };
  },
  methods: {
    getApiCharacter() {
      //aqui cambio los states y llamo al api
      this.$store.dispatch("setPage", 1);
      this.$store.dispatch("setName", this.searchQuery);
      this.$root.fetch();
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  background-color: black;
}
html,
body {
  background-color: black;
}

// @import "../components/scss/main.scss";
</style>