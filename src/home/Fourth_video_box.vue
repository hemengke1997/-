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
    ajax() {
        let len = this.count > this.pageSize ? this.pageSize : this.count;
        this.tempItem = this.videoItem.slice(0, len);
    },
    // 点击分页按钮的时候，改变视图
    changeView(current) {
      this.tempItem = [];
      let start = (current - 1) * this.pageSize + 1;
      let end =
        current * this.pageSize > this.videoItem.length
          ? this.videoItem.length
          : current * this.pageSize;
      for (let i = start; i <= end; i++) {
        this.tempItem.push(this.videoItem[i - 1]);
      }
    }
  },
  computed: {
    // 视频项目
    videoItem() {
      return this.$store.state.data;
    },
    // 当前页
    currentPage() {
      return this.$store.state.currentPage;
    },
    // 视频总数
    count() {
      return this.$store.state.videoCount;
    }
  },
  watch: {
    currentPage(val, oldval) {
      this.changeView(val);
    },
    videoItem(v,ov) {
      this.ajax()
    }
  },
  mounted() {
     this.ajax();
  }
};
</script>

<style>
</style>
