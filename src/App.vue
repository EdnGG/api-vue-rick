<template>
  <div id="app" class="app-component">
    <SearchCn />
    <FooterCn msg="Welcome to Footer component" />
  </div>
</template>

<script>
import SearchCn from "./components/SearchCn.vue";
import FooterCn from "./components/FooterCn.vue";

export default {
  name: "App",
  components: {
    SearchCn,
    FooterCn
  },
  data() {
    return {
      key: "value"
    };
  },
  created() {
    //llamo al api
    this.$root.fetch();
  }
};
</script>   

<style scoped>
/* .app-component {
  display: grid;
  place-items: center;
} */
</style>

