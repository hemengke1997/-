<template>
  <div>
    <div class="news_tab">
      <ul class="news_tab_ul">
        <li
          class="news_tab_item"
          v-for="(item,index) in tabItem"
          :key="index"
          :class="{active:index===isActive}"
          @click="clickNewsTab(item.id,index)"
        >
          <span class="news_en">{{ item.en }}</span>
          <span class="news_ch">{{ item.ch }}</span>
        </li>
      </ul>
    </div>

    <div class="news_box">
      <span class="look_more" :id="tabItem[isActive].id"></span>
      <ul class="news_ul">
        <li
          class="news_item"
          v-for="(item,index) in tempItems"
          :key="index"
          :id="item._id"
          :typeid="item.type_id"
          @click="enterItem(item._id)"
        >
          <span class="news_icon">{{ item.type }}</span>
          <div class="news">
            <span class="news_content">{{ item.description }}</span>
            <span class="news_date">{{ getDate(item.itime) }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      tabItem: [
        { en: "NEW", ch: "最新" ,id:1},
        { en: "NEWS", ch: "新闻" ,id:2},
        { en: "NOTICE", ch: "公告" ,id:3}
      ],
      maxLength: 5,
      ItemLength: 0,
      flag: false,
      isActive: 0,
      tempItems: []
    };
  },
  methods: {
    enterItem(id) {},
    clickNewsTab(id, index) {
      this.getNewsItem(id);
      this.isActive = index;
    },
    getNewsItem(id) {
      if (id===1) {
        this.$axios.get("http://api.paopao.vip/news/item?limit=5&page=1").then(res=>{
          this.tempItems = res.data.data.records;
        })
      } else if(id===2){
        this.$axios.get("http://api.paopao.vip/news/item?limit=5&page=1").then(res=>{
          this.tempItems = res.data.data.records;
        })
      } else if (id ===3) {
        this.$axios.get("http://api.paopao.vip/notice/item?limit=5&page=1").then(res=>{
          this.tempItems = res.data.data.records;
        })
      }
    },
    getDate(time) {
      let date = new Date(time * 1000);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1).toString();
      let day =
        date.getDay() >= 10 ? date.getDay() : "0" + date.getDay().toString();
      return month + "-" + day;
    },
  },
  mounted() {
    this.getNewsItem(1)
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  watch:{
  }
};
</script>


<style>
.news_item:hover {
  width: 540px;
  height: 60px;
  background-color: #537ff5;
  padding-left: 40px;
}
.news_item:hover .news_icon {
  background-color: #fff;
}
</style>
