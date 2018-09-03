import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Foucs from './directive/focus';
Vue.use(Foucs)
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
import routes from './routes.config';
const router=new VueRouter({
  routes
});

const store=new Vuex.Store();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
