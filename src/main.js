import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Foucs from './directive/focus';
import routes from './routes.config';
import VueI18n from 'vue-i18n';

Vue.use(Foucs)
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(VueI18n);
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

const i18n = new VueI18n({
    locale:'ja',
    messages,
})
window.i18n=i18n;
const router=new VueRouter({
  routes
});

const store=new Vuex.Store({
  modules:{
    a:{
      state:{
        numberA:11
      },
      mutations:{
        addA(){
          return ++this.numberA; 
        }
      },
      actions:{
        addAA({commit}){
            commit('addA')      
        }
      }
    },
    b:{
      state:{
        numberB:1,
        list:[1,2,3,4,5,6,7,8,9,0]
      },
      mutations:{
        addB(state,rootState){
          
          return ++state.numberB + rootState.a.numberA; 
        }
      },
      getters:{
        getGt(state){
          //return ()=>{
            return state.list.filter((n)=>{
              return n<=5;
            })
          //}
        }
      },
      actions:{
        async addBB({commit,dispatch,state,rootState}){
           var first=await dispatch('beforeAddBB');
           console.log('first',first,state.numberB)
           commit('addB',rootState,{root:true});
           var two=await dispatch('afterAddBB');
           console.log('two',two,state.numberB)

        },
        beforeAddBB({commit}){
          return new Promise((res,rej)=>{
                 setTimeout(()=>{
                  res('haha');
                  //commit('request')
                 },1000)
          })
        },
        afterAddBB(){
          return new Promise((res,rej)=>{
            setTimeout(()=>{
             res('heihei');
             //commit('request')
            },1000)
           })
        }
      }
    },
  }
  
});
Vue.prototype.bus=new Vue();
new Vue({
  router,
  render: h => h(App),
  store,
  i18n
}).$mount('#app')

