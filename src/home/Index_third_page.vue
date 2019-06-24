<template>
  <div class="third">
    <div class="third_container">
      <span class="third_person" :class="{active:flag}"></span>

      <carousel></carousel>
      <newstab></newstab>
      
      
    </div>
  </div>
</template>

<script>
import NewsTab from './Third_page_newstab';
import Carousel from './Carousel';
export default {
  data(){
    return{
      flag:false 
    }
  },
  components:{
    carousel:Carousel,
    newstab:NewsTab
  },
  methods:{
    roleAnimation(){
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if(scrollTop >= 1100){
        this.flag = true
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.roleAnimation)
  }
};
</script>

<style>
.third .third_person.active {
  left: -300px;
  bottom: -135px;
  transition: all 1s;
}
</style>
