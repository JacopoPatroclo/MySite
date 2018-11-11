import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
