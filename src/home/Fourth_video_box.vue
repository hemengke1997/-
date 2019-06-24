<template>
     <div class="video_box">
          <ul class="video_ul">
            <li class="video_item" v-for="(item,index) in videoItem" :key="index">
              <video :src="item.src" class="video">浏览器不支持</video>
              <div class="video_mask">
                <div class="video_button"></div>
              </div>
              <p class="video_title">{{ item.title }}</p>
            </li>
            
          </ul>
        </div>
</template>

<script>
export default {
    data(){
        return{
            videoItem:[]
        }
    },
    methods:{
        getVideoItems(type){
            if(type === )
        }
    },
    mounted(){
        this.getVideoItems()
    }
}
</script>

<style>

</style>
