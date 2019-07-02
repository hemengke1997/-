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
      tempItem: [],
      pageSize: 8
    };
  },
  methods: {
    getVideoItem(currentPage){
      this.$axios.get("http://api.paopao.vip/strategy/video?limit=8&page="+currentPage).then(res=>{
        this.tempItem = res.data.data.records;
        this.$store.commit("changeVideo",res.data.data.records);
        this.$store.commit("changeOther",{currentPage:currentPage,count:res.data.data.count,totalPage:res.data.data.total_page})
      })
    },
    // 点击分页按钮的时候，改变视图
    changeView(current) {
      this.tempItem = [];
      for (let i = 0; i < this.video.length ; i++) {
        this.tempItem.push(this.video[i]);
      }
    }
  },
  computed: {
    // 当前页
    currentPage() {
      return this.$store.state.currentPage;
    },
    video() {
      return this.$store.state.video;
    }
  },
  watch: {
    currentPage() {
      this.changeView();
    },
  },
  mounted() {
     this.getVideoItem(1);
  }
};
</script>

<style>
</style>
