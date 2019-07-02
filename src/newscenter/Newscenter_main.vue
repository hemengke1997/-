<template>
    <div class="dstyle">
        <First></First>

        <Second v-if="path"></Second>
        <router-view></router-view>
        <Pagination class="page" v-if="path"></Pagination>
    </div>
</template>

<script>
import First from './First'
import Second from './Second'
import Pagination from '../home/Pagination'


export default {
    components:{
        First,
        Second,
        Pagination,
    },
    data(){
        return{
        
        }
    },
    computed:{
        path(){
            return this.$route.path.toLowerCase() === '/newscenter';
        }
    },
    mounted(){
       
    }
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000
}
.dstyle {
    position: relative;
}
.page {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

</style>
