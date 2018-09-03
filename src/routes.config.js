export default [{
    name:'bwcx',
    path:'/bwcx',
    component:(res)=>{
      require(['./views/bwcx.vue'],res);
    },
    beforeEnter: (to, from, next) => {
        // ...
        next();
    },
    meta:{
        keepAlive:true
    }
  }]