<template>
  <div id="app">
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
  }
};
</script>   

<style>
</style>

