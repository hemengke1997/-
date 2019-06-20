<template>
  <div class="carousel">
    <div class="carousel_box">
      <ul class="carousel_ul" ref="csul" :class="{active:flag}">
        <li class="carousel_item">
          <img :src="carousel_item[carousel_item.length-1].imgSrc" alt ref="csimg">
        </li>
        <li v-for="(item,index) in carousel_item" :key="index" class="carousel_item">
          <img :src="item.imgSrc" alt>
        </li>
        <li class="carousel_item">
          <img :src="carousel_item[0].imgSrc" alt>
        </li>
      </ul>
    </div>

    <span class="arrow_left" @click="selectPic(0)"></span>
    <span class="arrow_right" @click="selectPic(1)"></span>
  </div>
</template>

<script>
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
      currentindex: 1,
      flag: false
    };
  },
  methods: {
    selectPic(direction) {
      let $ = selector => {
        return [].slice.call(document.querySelectorAll(selector));
      };
      if (direction) {
        if (this.currentindex < this.imgLen - 2 && this.currentindex > 0) {
          this.flag = true;
          this.$refs.csul.style.transform =
            "translateX(" + -this.currentindex * this.imgWidth + "px)";
          this.currentindex++;
        } else if (this.currentindex === this.imgLen - 2) {
        
            
          this.$refs.csul.style.transform = "translateX(" +   -this.currentindex * this.imgWidth + "px)";
          this.currentindex++
         
        } else if (this.currentindex === this.length - 1){
          this.flag = false
          this.$refs.csul.style.transform = "translateX(0px)";
          this.currentindex = 1;
        }
      } else {
      }
    }
  },
  mounted() {
    this.imgWidth = this.$refs.csimg.offsetWidth;
    this.$refs.csul.style.left = "-" + this.imgWidth + "px";
    this.imgLen = this.carousel_item.length + 2;
  }
};
</script>

<style>
.carousel .carousel_ul.active {
  transition: all 1s linear;
}
</style>
