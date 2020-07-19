<template>
  <div class="header">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h1>This is the Header component</h1>
          <div>
            <b-input-group>
              <b-form-input
                placeholder="Search..."
                v-model="searchQuery"
                @keyup.enter="searchCharacter"
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-secondary" @click="getApiCharacter">Go</b-button>
                <b-button variant="outline-secondary" @click="test">test</b-button>
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
      //searchQuery2: ""
    };
  },
  methods: {
    getApiCharacter() {
      //aqui cambio los states y llamo al api
      this.$store.dispatch("setPage", 1);
      this.$store.dispatch("setName", this.searchQuery);
      this.$root.fetch();
    },
    test() {
      //this.$store.commit("test");
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>