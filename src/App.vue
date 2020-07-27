<template>
  <div id="app" class="app-component">
    <SearchCn />
    <FooterCn />
  </div>
</template>

<script>
import SearchCn from "./components/SearchCn.vue";
import FooterCn from "./components/FooterCn.vue";

export default {
  name: "App",
  components: {
    SearchCn,
    FooterCn,
  },
  data() {
    return {
      key: "value",
    };
  },
  created() {
    //llamo al api
    this.$root.fetch();
  },
};
</script>   

<style lang="scss">
@import "./scss/main.scss";

body {
  background-color: black;
}
.app-component {
  background-color: black;
}
</style>

