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
  },
  methods: {
    handlerScroll(e){
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.flag = scrollTop >=80 ? false : true
    },
  },
  mounted(){
    window.addEventListener('scroll',this.handlerScroll)

  },
}
</script>

<style>
@font-face {
  font-family: wenyue;
  src: url("./style/font/WenYue-XinQingNianTi-NC-W8-1.otf");
}
</style>
