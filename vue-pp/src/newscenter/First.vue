<template>
    <div class="first">
        <div class="newscenter">
            <span class="h3">NEWS</span>
            <span class="h2">新闻中心</span>
            <span class="bg"></span>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style sco>
.first {
    width: 100%;
    height: 490px;
    background: url("../style/imgs/bg1.png") no-repeat 0px -40px;
    position: relative;
}
.newscenter {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 365px;
    height: 130px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    cursor: default;
}
.h3 {
    font-size: 30px;
    color: #c3c3c3;
    font-family: wenyue;
}
.h2 {
    font-size: 36px;
    font-family: wenyue;
}
.newscenter .bg {
    display: block;
    width: 40px;
    height: 12px;
    background-color: #ffcc01;
    position: absolute;
    left: 116px;
    bottom: 24px;
    z-index: -1;
}

</style>
