<template>
  <div class="search-container">
    <!-- <h1>{{ msg }}</h1> -->
    <img alt="rick-and-morty" src="../assets/images/rick-1.jpeg" class="main-image" />
    <h2 for="s-input">Ricky and Morty</h2>
    <button type="button" class="button-input" id="s-input">Get a new image!</button>
  </div>
</template>

<script>
import api from "../fetch-api/api.js";
export default {
  name: "search-cn",
  mounted() {
    console.log(`hello ${api.getCharacter}`);
  }
  // methods(){
  //   randomCharacter(id){

  //   }

  //}
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.button-input {
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.main-image {
  width: 1000px;
  height: 800px;
}
</style>