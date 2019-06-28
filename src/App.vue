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
    // 获取所有的新闻列表
    ajaxNewsItems(){
      this.$axios.get("http://api.paopao.vip/news/item").then(res => {
        this.$store.commit("changeNewsItems", res.data.data.records);
      });
    },
    // 获取所有视频列表
    ajaxVideoItems(){
      this.$axios.get("http://api.paopao.vip/strategy/video").then(res => {
        this.$store.commit("changeData", res.data.data.records);
      });
    },
    // 转换时间
    // getDate(time) {
    //   let date = new Date(time * 1000);
    //   let year = date.getFullYear();
    //   let month =
    //     date.getMonth() + 1 >= 10
    //       ? date.getMonth() + 1
    //       : "0" + (date.getMonth() + 1).toString();
    //   let day =
    //     date.getDay() >= 10 ? date.getDay() : "0" + date.getDay().toString();
    //   return month + "-" + day;
    // }
  },
  mounted(){
    window.addEventListener('scroll',this.handlerScroll)

  },
  created(){
    this.ajaxNewsItems()
    this.ajaxVideoItems()
  }
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
