import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import resize from 'vue-resize-directive'

Vue.config.productionTip = false;

new Vue({
  router,
  directives: {
    resize,
  },
  render: (h) => h(App),
}).$mount('#app');
