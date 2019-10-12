import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:4000', // Websocket server url or socket.io-client instance

  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
  options: {
    // path: '/my-app/',
  }, // Optional options
}));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
