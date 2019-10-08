/*eslint-disable */
import Vue from "vue";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App.vue";
import axios from 'axios'



import router from "./router";
import store from "./store/index"

import "./registerServiceWorker";

Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
