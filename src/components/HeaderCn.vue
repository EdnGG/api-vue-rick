<template>
  <div class="header">
    <!-- Listo, ve a la parte de props-->
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h1>This is the Header component</h1>
          <div>
            <b-input-group>
              <b-form-input
                v-model="search"
                placeholder="Search..."
                @keyup.enter="$emit.searchData"
              ></b-form-input>
              <b-input-group-append>

    <!-- Y aqui se la poones al boton-->
                <b-button @click="foo()">Aqui esta el ejemplo crack</b-button>
                <b-button variant="outline-secondary" @click="$emit.searchData">Go</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "header-cn",

  // Aqui recibes la prop (que es una funcion)
  props: ["search",'foo']
  // methods: {
    // searchData() {
  //   console.log("hello");
  // }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>