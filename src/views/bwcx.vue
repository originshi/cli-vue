<i18n>
  {
  "en": {
    
    "message":{
        "hello": "hello world11!"
    }
  },
  "ja": {
    
    "message":{
        "hello": "こんにちは、世界11！"
    }
  }
}
</i18n>

<template>

<div>

        <div>{{a}}</div>

        <input v-for='(value,index) in list' :key='index' type='text' v-focuss="a+c" v-focuss.last='index==list.length-1?true:false'></input>
        numberA:{{numberA}}
        numberb::{{numberB}}
        <div @click='addBB'>添加</div>
        <div @click='send'>send</div>
        <div @click='changlangulage'>changlangulage</div>
        {{getGt}}
        本地的{{$t("message.hello")}}
        

</div>

</template>

<script>
      //  <hello :msg='c'></hello>
    import {mapActions,mapMutations,mapState,mapGetters} from 'vuex';
    import Hello from '../components/HelloWorld.vue';
    export default{
        components:{
           Hello
        },
        data(){
            return {
                a:'iamiam',
                c:'one1234567890',
                list:new Array(8)
            }
        },
        computed:{
            ...mapState({
                numberA:(state)=>{
                    //console.log(state)
                    return state.a.numberA
                },
                numberB:(state)=>{
                    return state.b.numberB
                }
            }),
            ...mapGetters([
                'getGt'
            ])
        },
        created() {
            console.log(this.bus)
            this.bus.$on('data',(data)=>{
            console.log('data1',data)
            })


            
        },
        mounted() {
            //this.
        },
        // i18n:{
        //     message:{
        //         en: {
        //             message: {
        //             hello: 'hello world1'
        //             }
        //         },
        //         ja: {
        //             message: {
        //             hello: 'こんにちは、世界1'
        //             }
        //         }
        //    }
        // },
        methods:{
            ...mapActions([
                'addBB'
            ]),
            send(){
                this.bus.$emit('data',111);
            },
            changlangulage(){
                
                i18n.locale='en';
                //this.$i18n.locale='en';
                //console.log(this.$i18n.getLocaleMessage('en').message.hello);
            }
        },
        directives:{
            focuss:{
                inserted(el,binding,v,ov){
                    
                    //console.log(this.list,el,binding,v,ov);
                    el.value='111'
                    //console.log(binding);
                    el.focus()
                }
                    
                
            },
        }
    }
</script>
<style >
    
</style>