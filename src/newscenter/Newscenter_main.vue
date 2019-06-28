<template>
    <div class="dstyle">
        <First></First>
        <Second></Second>
        <Pagination class="page" :allDatas="allDatas"></Pagination>
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
        Pagination
    },
    data(){
        return{
            allDatas:{
                pageName:'newscenter',
                pageSize:5,
                dataLength:this.$store.state.newsItems.length,
                currentPage:1
            },
        }
    }
}
</script>

<style>
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
