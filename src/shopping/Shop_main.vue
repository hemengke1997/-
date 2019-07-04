<template>
    <div class="container">
        <div class="first"></div>
        <second></second>
        <third></third>
    </div>
</template>

<script>
import second from './Second'
import third from './Third'
export default {
    components:{
        second,
        third,
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    background: url("../style/imgs/BG_ddf8da8.png") no-repeat;
}
.first {
    width: 100%;
    height: 900px;
}
</style>
