<template>
    <div class="first">
      <div class="first_container">
        <div class="first_logo"></div>
        <div class="first_cute">
          <img src="../style/imgs/zu22.png" alt>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.first {
  width: 100%;
  height: 960px;
  position: relative;
  background: url("../style/imgs/bg_wrap_fullpage.png") no-repeat top center;
}
.first .first_container {
  width: 1200px;
  height: 960px;
  margin: 0 auto;
}
.first_container .first_logo {
  width: 680px;
  height: 605px;
  background: url("../style/imgs/jkvlog.png") no-repeat;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.first_container .first_cute {
  position: absolute;
  width: 1105px;
  height: 645px;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  animation: first_cute 3s linear infinite;
}
@keyframes first_cute {
  0% {
    left: 50%;
    bottom: -50px;
  }
  25% {
    left: 50%;
    bottom: -45px;
  }
  50% {
    left: 49%;
    bottom: -50px;
  }
  75% {
    left: 49%;
    bottom: -45px;
  }
  100% {
    left: 50%;
    bottom: -50px;
  }
}
/* 第一屏结束 */
</style>
