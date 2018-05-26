import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
