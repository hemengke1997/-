<template>
  <div>
    <header class="top" v-if="flag">
      <NavLogo/>
      <nav class="navigation">
        <ul>
          <li v-for="(item, index) in Item" :key="index">
            <a :href="item.itemHref" class="txt">{{ item.title }}</a>
            <span :class="['nav_bg',{active:index === isActive}]"></span>
          </li>
        </ul>
      </nav>
    </header>
    <header class="top_scroll" v-if="!flag">
      <div class="logo_nav_scroll">
        <NavLogo/>
        <nav class="navigation_scroll">
          <ul>
            <li v-for="(item, index) in Item" :key="index">
              <a :href="item.itemHref" :class="['txt',{active:index === isActive}]">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import NavLogo from "./NavLogo"
export default {
  data() {
    return {
      Item: [
        {
          itemHref: "/index",
          title: "首页",
          id:0
        },
        {
          itemHref: "/newscenter",
          title: "新闻中心",
          id:1
        },
        {
          itemHref: "/gameintroduce",
          title: "游戏介绍",
          id:2
        },
        {
          itemHref: "/shoppingmall",
          title: "泡泡商城",
          id:3
        },
        {
          itemHref: "activities",
          title: "活动专区",
          id:4
        }
      ],
      isActive: -1
    };
  },
  computed:{
     path(){
        return this.$route.path.toLowerCase().split('/')[1];
      },
  },
    mounted(){
      this.check()
    },
    updated(){
      this.check()
    },
    methods:{
      check(){
        this.Item.forEach(item=>{
          if(item.itemHref.split('/')[1]==this.path){
            this.isActive = item.id
          }
        })     
      }
  },
  props: ["flag"],
  components: {
    NavLogo
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
@font-face {
  font-family: wenyue;
  src: url('../style/font/WenYue-XinQingNianTi-NC-W8-1.otf');
}
/* header模块 */
.top {
  width: 100%;
}
.logo {
  float: left;
  margin-left: 95px;
  margin-top: 8px;
  position: relative;
  z-index: 1;
}
.logo_scroll {
  float: left;
  margin-left: 95px;
  margin-top: 7px;
}
.navigation {
  width: 750px;
  height: 42px;
  line-height: 42px;
  float: right;
  background: url("../style/imgs/circle2.png");
  margin: 25px 58px 0 0;
  position: relative;
  z-index: 1;
}
.navigation a {
  color: #ffffff;
}
.navigation a:hover {
  color: #ffcc01;
}
.navigation .nav_bg.active {
  display: block;
  width: 30px;
  height: 10px;
  background-color: #ffcc01;
  position: absolute;
  left: -7px;
  top: 24px;
  z-index: -1;
}
.navigation .nav_bg.hide {
  display: none;
}
.navigation ul li {
  float: left;
  width: 137px;
  position: relative;
}
.navigation ul li:first-child {
  margin-left: 65px;
}

/* 滚动一定距离之后的header */
.top_scroll {
  width: 100%;
}
.navigation_scroll {
  width: 750px;
  height: 42px;
  line-height: 42px;
  float: right;
  margin: 25px 58px 0 0;
}
.navigation_scroll a {
  color: #fff;
}
.navigation_scroll a:hover {
  color: #ffcc01;
}
.navigation_scroll a.active {
  color: #ffcc01;
}
.navigation_scroll ul li {
  float: left;
  width: 137px;
}
.logo_nav_scroll {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
}
.txt {
  font-family: wenyue;
  font-size: 18px;
}
/* header结束 */
</style>
