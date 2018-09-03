<template>

<div>

        <div>{{a}}</div>

        <input v-for='(value,index) in list' :key='index' type='text' v-focuss="a+c"></input>


</div>

</template>
<script>
    export default{
        data(){
            return {
                a:'iamiam',
                c:'one',
                list:new Array(8)
            }
        },
        directives:{
            focuss:{
                inserted(el,binding,v,ov){
                    
                    console.log(this.list,el,binding,v,ov);
                    el.value='111'
                    el.focus()
                }
                    
                
            },
        }
    }
</script>