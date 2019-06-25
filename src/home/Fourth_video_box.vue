<template>
  <div class="video_box">
    <ul class="video_ul">
      <li class="video_item" v-for="(item,index) in tempItem" :key="index">
        <video :src="item.video" class="video" :poster="item.pic" :id="item._id">浏览器不支持</video>
        <div class="video_mask">
          <div class="video_button"></div>
        </div>
        <p class="video_title">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    
  },
  
};
</script>

<style>
</style>
