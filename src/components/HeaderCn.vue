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
                <b-button variant="outline-secondary" @click="searchCharacter">Go</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "header-cn",
  data() {
    return {
      searchQuery: ""
    };
  },
  props: ["search", "searchData"],
  methods: {
    searchCharacter() {
      this.$emit("searchCharacter", this.searchQuery);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>