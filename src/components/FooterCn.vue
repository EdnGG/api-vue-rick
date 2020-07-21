<template>
  <div class="footer">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <div>
            <h1>{{ msg }}</h1>
          </div>
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
<style scoped>
.footer {
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>