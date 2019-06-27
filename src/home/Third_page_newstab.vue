<template>
  <div>
    <div class="news_tab">
      <ul class="news_tab_ul">
        <li
          class="news_tab_item"
          v-for="(item,index) in tabItem"
          :key="index"
          :class="{active:index===isActive}"
          @click="clickNewsTab(item.ch,index)"
        >
          <span class="news_en">{{ item.en }}</span>
          <span class="news_ch">{{ item.ch }}</span>
        </li>
      </ul>
    </div>

    <div class="news_box">
      <span class="look_more" :type="tabItem[isActive].ch"></span>
      <ul class="news_ul">
        <li
          class="news_item"
          v-for="(item,index) in tempItems"
          :key="index"
          :id="item._id"
          :typeid="item.type_id"
          @click="enterItem(id)"
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
        { en: "NEW", ch: "最新" },
        { en: "NEWS", ch: "新闻" },
        { en: "NOTICE", ch: "公告" }
      ],
      maxLength: 5,
      ItemLength: 0,
      flag: false,
      isActive: 0,
      tempItems: [1,2,2]
    };
  },
  methods: {
    enterItem() {},
    clickNewsTab(type, index) {
      this.getNewsItem(type);
      this.isActive = index;
    },
    templateLen(x,y){
      let len = x.length > this.maxLength ? this.maxLength : x.length;
      y = x.slice(0, len);
      this.tempItems = y;
    },
    getNewsItem(type) {
      if (type === undefined || type === "最新") {
        this.tempItems = this.data
        this.templateLen(this.data,this.tempItems) 
      } else {
        this.tempItems = this.data.filter(item => {
          return item.type === type;
        });
        this.templateLen(this.tempItems,this.tempItems)
      }
    },
    getAllItems() {
      this.$axios.get("http://api.paopao.vip/news/item").then(res => {
        var newsItems = res.data.data.records;
        this.$store.commit("changeNewsItems", newsItems);
        console.log(this.tempItems,"222")
        this.templateLen(newsItems,this.tempItems)
      });
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
    }
  },
  mounted() {
    this.getAllItems();
  },
  computed: {
    data() {
      return this.$store.state.newsItems;
    }
  },
  watch:{
    tempItems:function(v,ov){
      console.log(v)
    }
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
