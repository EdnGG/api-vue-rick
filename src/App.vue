<template>
  <div id="app">
    <!-- <HeaderCn /> -->
    <SearchCn />
    <!-- <MainCn msg="Welcome to the Main component" /> -->
    <FooterCn msg="Welcome to Footer component" />
  </div>
</template>

<script>
import SearchCn from "./components/SearchCn.vue";
// import HeaderCn from "./components/HeaderCn.vue";
import FooterCn from "./components/FooterCn.vue";

export default {
  name: "App",
  components: {
    // HeaderCn,
    SearchCn,
    FooterCn
  }

  // data: function(){
  //   return{

  //   }
  // }
};
</script>   

<style>
</style>

