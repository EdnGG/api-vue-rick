import Vue from 'vue'
import App from './App.vue'
// import router from './route'
import store from './store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  //router,
  store,
  render: h => h(App),
  methods: {
    fetch() {
      const params = {
        page: this.$store.state.page,//esta es otra forma de usar el store (me gusta mas en un computed)
        name: this.$store.state.name,
        id: this.$store.state.id


      };
      axios
        // { params } for sending type query params
        //  "https://rickandmortyapi.com/api/character/?page=<>"
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then(res => {
          //actualizo el estate de characteres usando dispatch
          this.$store.dispatch("setCharacters", res.data.results);
          // aqui evalua si la respuesta del API no es null  se queda con true
          // de lo contrario si es no es null, cambia el valor a false
          this.$store.dispatch("nextPage", res.data.info.next ? true : false);
          this.$store.dispatch("prevPage", res.data.info.prev ? true : false);
          // this.$store.dispatch("showCharacter", res.data.results.id)


          //aqui puedes actualizar el state page para saber si aun hay un "next page" en el api
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }
}).$mount('#app')