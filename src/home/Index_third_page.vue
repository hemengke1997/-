<template>
  <div class="third">
    <div class="third_container">
      <span class="third_person"></span>
      <carousel></carousel>
      <div class="news_tab">
        <ul class="news_tab_ul">
          <li class="news_tab_item active">
            <span class="news_en">NEW</span>
            <span class="news_ch">最新</span>
          </li>
          <li class="news_tab_item">
            <span class="news_en">NEWS</span>
            <span class="news_ch">新闻</span>
          </li>
          <li class="news_tab_item">
            <span class="news_en">NOTICE</span>
            <span class="news_ch">公告</span>
          </li>
        </ul>
      </div>
      <div class="news_box active">
        <span class="look_more"></span>
        <ul class="news_ul"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel';
export default {
  data(){
    return{
      
    }
  },
  components:{
    carousel:Carousel
  }
};
</script>

<style>
</style>
