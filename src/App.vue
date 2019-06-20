<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- 3.使用组件 -->
    <Header :flag = "flag"/>
    <Index/>
    <Footer/>
  </div>
</template>

<script>
// 1.引入组件
import Header from './components/Header.vue'
import Footer from './components/Footer'
import Index from './home/Index_main'
export default {
  data(){
    return {
      flag:true,
    }
  },
  // 2.注册组件  映射标签
  components: {
    Header,
    Footer,
    Index
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
  watch:{
    getFlag:(val)=>{
      this.flag = val
    }
  }

}
</script>

<style>

</style>
