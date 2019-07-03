<template>
  <div class="carousel">
    <div class="carousel_box" @mouseover="stop()" @mouseleave="autoplay()">
      <ul class="carousel_ul">
        <li class="carousel_item">
          <img :src="carousel_item[carousel_item.length-1].imgSrc"  alt>
        </li>
        <li v-for="(item,index) in carousel_item" :key="index" class="carousel_item">
          <img :src="item.imgSrc" alt>
        </li>
        <li class="carousel_item">
          <img :src="carousel_item[0].imgSrc"  alt>
        </li>
      </ul>
    </div>

    <span class="arrow_left" @click="clickLeft()"></span>
    <span class="arrow_right" @click="clickRight()"></span>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      carousel_item: [
        { imgSrc: require("../style/imgs/carousel1.png") },
        { imgSrc: require("../style/imgs/2233_03.png") },
        { imgSrc: require("../style/imgs/news_details_bg.png") }
      ],
      index: -1,
      flag: true,
      timer: "",
      speed: 1000
    };
  },
  methods: {
    init(){
      $('.carousel_ul').css('left',-this.imgWidth);
      this.index = 1;
    },
    selectPic() {
      this.flag = false
      if (this.index < this.imgLen - 2 && this.index > 0) {
        $(".carousel_ul").animate(
          {
            left: "-" + this.imgWidth * (this.index + 1) + "px"
          },
          this.speed,
          "linear",
          () => {
            this.flag = true;
          }
        );
        this.index++;
      } else if (this.index === this.imgLen - 2) {
        this.flag = false;
        $(".carousel_ul").animate(
          {
            left: "-" + this.imgWidth * (this.index + 1) + "px"
          },
          this.speed,
          "linear",
          () => {
            $(".carousel_ul").css("left", -this.imgWidth);
            this.flag = true;
          }
        );
         this.index = 1;
      }
    },
    stop() {
      clearInterval(this.timer);
      this.timer = "";
    },
    autoplay() {
      this.timer = setInterval(this.selectPic, 3000);
    },
    clickRight() {
      if (this.flag) {
        this.stop();
        this.selectPic();
        this.autoplay();
      }
    },
    clickLeft() {
      if (this.flag) {
        this.flag = !this.flag;
        this.stop();
        if (this.index === 1) {
          $(".carousel_ul").animate(
            {
              left: "0px"
            },
            this.speed,
            "linear",
            () => {
              $(".carousel_ul").css("left", -(this.imgLen - 2) * this.imgWidth);
              this.flag = !this.flag;
            }
          );
          this.index = this.imgLen - 2;
        } else {
          $(".carousel_ul").animate(
            {
              left: "-" + this.imgWidth * (this.index - 1) + "px"
            },
            this.speed,
            "linear",
            () => {
              this.flag = !this.flag;
            }
          );
          this.index--;
        }
        this.autoplay();
      }
    }
  },
  mounted() {
    // 先来个初始化
    this.init();
    console.log(this.index)
    this.autoplay();
    
  },
  computed:{
    imgWidth(){
      return $(".carousel_item>img").width();
    },
    imgLen(){
      return $(".carousel_item").length;
    }
  },
  destroyed(){
    this.stop()
    console.log('轮播图stoped')
  }
};
</script>

<style>
</style>
