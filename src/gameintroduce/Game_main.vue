<template>
    <div class="main">
        <div class="first">
            <img src="../style/imgs/slogan1_f10bd2e.png" alt="">
        </div>
        <div class="bubble"></div>
        <second></second>
        <third></third>
    </div>
</template>

<script>
import second from './Second'
import third from './Thrid'
export default {
    components:{
        second,
        third
    }
}
</script>

<style>
.main {
    width: 100%;
    background: url("../style/imgs/intro_bg.png") no-repeat;
    overflow: hidden;
}
.first {
    width: 1200px;
    height: 900px;
    margin: 0 auto;
    position: relative;
}
.first img {
    position: absolute;
    top: 265px;
    left: 0;
}
.bubble{
    width: 137px;
    height: 154px;
    position: absolute;
    right: 0;
    top: 1800px;
    background-image: url("../style/imgs/qipp.png");
}
</style>
