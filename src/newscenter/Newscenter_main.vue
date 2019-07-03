<template>
    <div class="dstyle">
        <newsFirst v-if="first"></newsFirst>

        <Second v-if="path"></Second>
        <router-view></router-view>
        <Pagination class="page" v-if="path"></Pagination>
    </div>
</template>

<script>
import newsFirst from './News_First'
import Second from './Second'
import Pagination from '../home/Pagination'


export default {
    components:{
        newsFirst,
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
        },
        first(){
            return this.$route.path.toLowerCase().indexOf('/newscenter')!=-1
        }
    },
    mounted(){
       console.log(this.$route.path)
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
