<template>
  <div class="footer">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <!-- social media -->

          <!-- Ends social media -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "footer-cn",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footer {
  background-color: black;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>