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
        <li class="news_item" v-for="(item,index) in data" :key="index"  :id="item._id" :typeid="item.type_id" @click="enterItem(id)">
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
import $ from "jquery";
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
      data: [],
      isActive:0
    };
  },
  methods: {
    enterItem() {
        
    },
    clickNewsTab(type,index) {
        this.getNewsItem(type)
        this.isActive = index
        this.changeType(index)
    },
    getNewsItem(type) {
      if (type === undefined || type === '最新') {
        this.$axios.get("http://api.paopao.vip/news/item").then(res => {
          this.data = res.data.data.records;
          let len = this.data.length;
          this.ItemLength = len > this.maxLength ? this.maxLength : len;
          this.data.splice(this.ItemLength);
        });
      } else {
        this.$axios.get("http://api.paopao.vip/news/item").then(res => {
          this.data = res.data.data.records;
          this.data = this.data.filter(item=>{
              return item.type === type
          })
          let len = this.data.length;
          this.ItemLength = len > this.maxLength ? this.maxLength : len;
          this.data.splice(this.ItemLength);
        });
      }
    },
    getDate: function(time) {
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
    this.getNewsItem();
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
