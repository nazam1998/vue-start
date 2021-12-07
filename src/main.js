import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'jquery';
import 'popper.js';
import 'animate.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
