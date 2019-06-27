<template>
  <div id="app">
   
    <!-- 3.使用组件 -->
    <Header :flag = "flag"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// 1.引入组件
import Header from './components/Header.vue'
import Footer from './components/Footer'
import Index from './home/Index_main'
import NewsCenter from './newscenter/Newscenter_main'
export default {
  data(){
    return {
      // scrollTop:0
      flag:true
    }
  },
  // 2.注册组件  映射标签
  components: {
    Header,
    Footer,
    Index,
    NewsCenter
  },
  methods: {
    handlerScroll(e){
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.flag = scrollTop >=80 ? false : true
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handlerScroll)
  },
  // computed:{
  //   flag(){
  //     return this.scrollTop >=80 ? false : true
  //   }
  // }
}
</script>

<style>
@font-face {
  font-family: wenyue;
  src: url("./style/font/WenYue-XinQingNianTi-NC-W8-1.otf");
}
</style>
