<template>
  <div class="carousel">
    <div class="carousel_box" @mouseover="stop()" @mouseleave="autoplay()">
      <ul class="carousel_ul">
        <li class="carousel_item">
          <img :src="carousel_item[carousel_item.length-1].imgSrc" alt>
        </li>
        <li v-for="(item,index) in carousel_item" :key="index" class="carousel_item">
          <img :src="item.imgSrc" alt>
        </li>
        <li class="carousel_item">
          <img :src="carousel_item[0].imgSrc" alt>
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
      imgWidth: 600,
      imgLen: 0,
      index: 1,
      flag: true,
      timer: "",
      speed: 1000
    };
  },
  methods: {
    selectPic() {
      const _this = this;
      const _imgWidth = this.imgWidth;
      this.flag = false
      if (this.index < this.imgLen - 2 && this.index > 0) {
        $(".carousel_ul").animate(
          {
            left: "-" + this.imgWidth * (this.index + 1) + "px"
          },
          800,
          "linear",
          function() {
            _this.flag = true;
          }
        );
        this.index++;
      } else if (this.index === this.imgLen - 2) {
        _this.flag = false;
        $(".carousel_ul").animate(
          {
            left: "-" + this.imgWidth * (this.index + 1) + "px"
          },
          800,
          "linear",
          function() {
            $(".carousel_ul").css("left", -_imgWidth);
            _this.flag = true;
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
        const _this = this;
        const _imgWidth = this.imgWidth;
        const _imgLen = this.imgLen;

        this.flag = !this.flag;
        this.stop();
        // function a() {
        //   var p = new Promise((resolve,reject) => {
        //     $(".carousel_ul").animate(
        //       {
        //         left: "0px"
        //       },
        //       800,
        //       "linear",
        //       function() {
        //         // $(".carousel_ul").css("left", -(_imgLen - 2) * _imgWidth);
        //         // _this.flag = !_this.flag;
        //         resolve('11111')
        //       }
        //     );
        //     // this.index = this.imgLen - 2;
        //   });
        //   return p;
        // }
        // a().then((d)=>{
        //   this
        // })
        if (this.index === 1) {
          $(".carousel_ul").animate(
            {
              left: "0px"
            },
            800,
            "linear",
            function() {debugger
              $(".carousel_ul").css("left", -(_imgLen - 2) * _imgWidth);
              _this.flag = !_this.flag;
            }
          );
          this.index = this.imgLen - 2;
        } else {
          $(".carousel_ul").animate(
            {
              left: "-" + this.imgWidth * (this.index - 1) + "px"
            },
            800,
            "linear",
            function() {
              _this.flag = !_this.flag;
            }
          );
          this.index--;
        }
        this.autoplay();
      }
    }
  },
  mounted() {
    this.imgWidth = $(".carousel_item>img").width();
    this.imgLen = $(".carousel_item").length;
    this.autoplay();
  },
  created() {}
};
</script>

<style>
</style>
