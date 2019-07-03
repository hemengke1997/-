<template>
    <div class="second">
        <div class="game_mod">
            <img src="../style/imgs/gamemodel.png" alt="">
        </div>
        <div class="game_battle">
            <div class="bubble1"></div>
            <div class="battle">
                <div class="battle_head"></div>
                <div class="battle_body"></div>
            </div>
            <div class="battle_txt">
                <p>大逃杀模式，存活到最后</p>
                <p>取得胜利</p>
            </div>
            <div class="bubble2"></div>
        </div>
        <div class="game_video">
            <video class="video" src="../../static/video/千与千寻（7分钟看完）_超清.mp4" poster=""></video>
            <div class="video_mask">
                <div class="video_button"></div>
            </div>
        </div>
        <div class="personbg"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.second {
    width: 1600px;
    height: 900px;
    margin: 0 auto;
    position: relative;
}
.second .game_mod {
    position: absolute;
    top: 220px;
}
.second .game_battle {
    width: 885px;
    height: 465px;
    position: absolute;
    left: 275px;
    top: 250px;
    background: url("../style/imgs/bkkcx.png") no-repeat;
}
.game_battle .bubble1 {
    width: 122px;
    height: 121px;
    position: absolute;
    left: 305px;
    top: -180px;
    background: url("../style/imgs/qipappp.png") no-repeat;
}
.game_battle .battle {
    width: 180px;
    height: 100px;
    position: absolute;
}
.game_battle .battle_head {
    width: 90px;
    height: 18px;
    position: absolute;
    left: 90px;
    top: 80px;
    background: url("../style/imgs/100BATTLE.png") no-repeat;
}
.game_battle .battle_body { 
    width: 160px;
    height: 60px;
    position: absolute;
    left: 90px;
    top: 120px;
    background: url("../style/imgs/battle.png") no-repeat;
}
.game_battle .battle_txt {
    position: absolute;
    left: 85px;
    top: 195px;
    font-size: 20px;
    font-family: '微软雅黑', sans-serif;
    color: #757575;
}
.game_battle .bubble2 {
    width: 306px;
    height: 387px;
    position: absolute;
    left: -130px;
    bottom: -160px;
    background: url("../style/imgs/qipao.png") no-repeat;
    animation: bubble2Animation 4s linear infinite;
}
@keyframes bubble2Animation {
    0% {bottom:-160px}
    50% {bottom:-100px}
    100% {bottom: -160px}
}
.second .game_video {
    width: 744px;
    height: 504px;
    background: url("../style/imgs/kmlm.png") no-repeat;
    position: absolute;
    right: 200px;
    top: 100px;
    z-index: 9;
}
.second .game_video .video {
    width: 660px;
    height: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-51%);
}
.game_video .video_mask {
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
.game_video .personbg {
    width: 359px;
    height: 454px;
    position: absolute;
    right: -170px;
    bottom: -190px;
    background: url("../style/imgs/yqcr.png") no-repeat;
}
</style>
