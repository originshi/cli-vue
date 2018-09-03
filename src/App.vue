<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <router-view v-if="!$route.meta.keepAlive"></router-view>
     <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      a:false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
