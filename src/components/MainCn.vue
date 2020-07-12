<template>
  <div class="main-container">
    <!-- <br /> -->
    <!-- <div class="image-container">
      <h1>{{ msg }}</h1>
      <img alt="Chuck-Norris" src="../assets/images/nope.jpg" class="main-image" />
    </div>-->
    <SearchCn />
  </div>
</template>

<script>
import SearchCn from "@/components/SearchCn";
export default {
  name: "main-cn",
  components: { SearchCn },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
}
.main-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
}
</style>
