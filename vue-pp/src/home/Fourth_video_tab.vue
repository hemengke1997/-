<template>
  <div class="video_tab">
    <ul class="video_tab_ul">
      <li class="video_tab_li" v-for="(item,index) in videoTab" :key="index" :class="{active:isActive === index}" @click="clickVideoTab(index)">
        <span class="video_desc_en">{{ item.en }}</span>
        <span class="video_desc_ch">{{ item.ch }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            videoTab:[
                {en:'HOT',ch:'热门'},
                {en:'INTRODUCE',ch:'游戏介绍'}
            ],
            isActive:0
        }
    },
    methods:{
        clickVideoTab(index){
            this.isActive = index
            
        }
    }
};
</script>

<style>
</style>
