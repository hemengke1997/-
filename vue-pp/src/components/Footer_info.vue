<template>

  <a :href="info.infoHref">
    <span v-if="isSpan">{{ info.content }}</span>
    <img :src="info.content" alt="" v-if="!isSpan" :class="{twitter:info.name=='twitter'}">
  </a>
</template>

<script>
export default {
    props:['info','isSpan'],
    computed:{
        
    },
    data(){
        return{
            
        }
    },
    created(){

    },
    methods:{
    },
    mounted(){

    }
};
</script>

<style>
.twitter {
  margin: 0 30px;
}
</style>
