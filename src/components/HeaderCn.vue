<template>
  <div class="header">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h1>{{ msg }}</h1>

          <img alt="Vue logo" src="../assets/images/logo.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "header-cn",
  props: {
    msg: String
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