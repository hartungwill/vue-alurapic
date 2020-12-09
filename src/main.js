import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// importação de diretivas é direto
import './directives/Transform'; 

// entre chaves, pois não é default
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes, // ES6:ou somente routes  
    mode: 'history'
  });

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
