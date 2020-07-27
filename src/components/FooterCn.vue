<template>
  <div class="footer">
    <b-container>
      <b-row class="text-center icons">
        <b-col>
          <!-- social media -->
          <a target="_blank">
            <font-awesome-icon icon="coffee" size="lg" inverse />
          </a>

          <a href="https://github.com/EdnGG" target="_blank">
            <font-awesome-icon icon="coffee" size="lg" inverse />
          </a>
          <!-- Ends social media -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import { mdiGithub } from "@mdi/js";
export default {
  name: "footer-cn",
  data() {
    return {
      // coffee: "https://www.linkedin.com/in/eden-gomez-5002a386/",
      // github: "https://github.com/EdnGG",
      // myIcon: coffee,
    };
  },
  props: {},
  components: {},
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
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>