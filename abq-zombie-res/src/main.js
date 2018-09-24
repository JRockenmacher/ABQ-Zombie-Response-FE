import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC3zQxNuaj1QbsjZOd6siw67qEeth5VZRs",
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
