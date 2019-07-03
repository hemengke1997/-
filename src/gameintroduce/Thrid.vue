<template>
    <div class="third">
        <div class="personbg"></div>
        <div class="game_video">
            <video class="video" src="../../static/video/千与千寻（7分钟看完）_超清.mp4" poster=""></video>
            <div class="video_mask">
                <div class="video_button"></div>
            </div>
        </div>
        <div class="game_classic">
            <div class="bubble_rocket"></div>
            <div class="classic">
                <div class="classic_head"></div>
                <div class="classic_body"></div>
            </div>
            <div class="classic_txt">
                <p>经典不变，依旧永恒</p>
                <p>再度风靡万人狂欢</p>
            </div>
            <div class="personbg1"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.third {
    width: 1200px;
    height: 964px;
    margin: 0 auto;
    position: relative;
}
.third .game_video {
    width: 700px;
    height: 460px;
    background: url("../style/imgs/bgggg.png") no-repeat;
    position: absolute;
    left: 85px;
    top: 200px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px;
    border-radius: 18px;
    box-shadow: 4px 1px 5px 5px rgba(0, 0, 0, .4);
    z-index: 10;
}
.third .game_video .video {
    width: 660px;
    height: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-51%);
}
.third .game_video .video_mask {
    width: 660px;
    height: 420px;
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-51%);
    box-sizing: border-box;
    border: 1px rgba(0, 0, 0, .5);
    border-radius: 8px;
    cursor: pointer;
}
.video_mask .video_button {
    width: 74px;
    height: 72px;
    background: url("../style/imgs/video_button.png") no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-51%);
    box-sizing: border-box;
    border: 1px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, .4);
}
.third .personbg {
    width: 399px;
    height: 600px;
    position: absolute;
    left: -285px;
    top: 15px;
    background-image: url("../style/imgs/person22.png");
    background-repeat: no-repeat;
    animation: person_rotate 4s infinite;
    transform-origin: 10px 0%;
}
@keyframes person_rotate {
    0% {transform: rotate(0);}
    50% {transform: rotate(45deg);}
    100% {transform: rotate(0);}
}
.game_classic {
    width: 841px;
    height: 421px;
    position: absolute;
    right: 0;
    top: 350px;
    background-image: url("../style/imgs/classic_model.png");
    background-repeat: no-repeat;
    z-index: 1;
}
.game_classic .bubble_rocket {
    width: 88px;
    height: 87px;
    position: absolute;
    right: -30px;
    top: -43px;
    background: url("../style/imgs/qppppp.png") no-repeat;
}
.game_classic .classic {
    width: 180px;
    height: 100px;
    position: absolute;
    right: 50px;
    top: 60px;
}
.game_classic .classic .classic_head {
    width: 90px;
    height: 18px;
    position: absolute;
    right: 0;
    top: 0px;
    background: url("../style/imgs/CLASSIC.png") no-repeat;
}
.game_classic .classic .classic_body {
    width: 160px;
    height: 60px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    background: url("../style/imgs/jdms.png") no-repeat;
}
.game_classic .classic_txt {
    position: absolute;
    right: 60px;
    bottom: 190px;
    font-size: 20px;
    font-family: '微软雅黑', sans-serif;
    color: #757575;
}
.classic_txt p:last-child {
    text-indent: 1em;
}
.personbg1 {
    width: 319px;
    height: 245px;
    position: absolute;
    right: -180px;
    bottom: -180px;
    background: url("../style/imgs/person3.png") no-repeat;
}
</style>
