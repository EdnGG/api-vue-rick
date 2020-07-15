<template>
  <div id="app">
    <HeaderCn msg="Welcome to Header component" />
    <MainCn msg="Welcome to the Main component" />
    <FooterCn msg="Welcome to Footer component" />
  </div>
</template>

<script>
import MainCn from "./components/MainCn.vue";
import HeaderCn from "./components/HeaderCn.vue";
import FooterCn from "./components/FooterCn.vue";

export default {
  name: "App",
  components: {
    MainCn,
    HeaderCn,
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

