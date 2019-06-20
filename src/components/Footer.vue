<template>
  <footer class="footer">
    <div>
      <ul class="info">
        <li>
          <img src="../style/imgs/logo-b.png" alt>
        </li>


        <li>
          <info v-for="(info,index) in infoList" :key="index" :isSpan="isSpan" :info="info"></info>
        </li>
        <li>
          <info v-for="(info, index) in FTI" :key="index" :isSpan="!isSpan" :info="info"></info>
        </li>
      </ul>
      
      <div class="person">
        <img src="../style/imgs/a_326.png" alt>
      </div>
      <p class="copyright">COPYRIGHT (C) 2016. ALL RIGHTS RESERVED 蜀ICP备17027010号-1</p>
    </div>
  </footer>
</template>

<script>
import info from './Footer_info'
export default {
  data(){
    return {
      infoList:[
        {infoHref:'1',content:'PRODUCTS'},
        {infoHref:'2',content:'BLOG'},
        {infoHref:'3',content:'SHOP'},
        {infoHref:'4',content:'CONTACTS'},
      ],
      FTI:[
        {infoHref:'5',content:require('../style/imgs/facebook.png'),name:'facebook'},
        {infoHref:'6',content:require('../style/imgs/twitter.png'),name:'twitter'},
        {infoHref:'7',content:require('../style/imgs/instagram.png'),name:'ins'},
      ],
      isSpan:true
    }
  },
  components:{
    info:info
  }
};
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
}
/* 页脚开始 */
.footer {
  width: 100%;
  height: 500px;
  background: url("../style/imgs/p5_bg_9831973.png") no-repeat;
  position: relative;
  margin-top: -5px;
  overflow: hidden;
}
.footer .info {
  width: 390px;
  height: 200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer .info li span {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 8px;
}
.footer .info li:nth-child(2) {
  margin: 30px auto;
}
.twitter {
  margin: 0 30px;
}
.footer .person {
  width: 1200px;
  height: 96px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3c3660;
  margin-top: 90px;
}
.copyright {
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-top: 30px;
}
/* 页脚结束 */
</style>
