<template>
  <div>
    <div class="head_box">
      <div class="title_box">
        <span class="back_arrow" @click="goback()">返回</span>
        <h1 class="h1">{{item.name}}</h1>
        <div class="detail">
          <span class="news">{{item.type}}</span>
          <span class="date">{{getDate(item.itime)}}</span>
          <span class="times">浏览次数:{{ item.read_count }}次</span>
        </div>
      </div>
    </div>
    <div class="body_box">
      <p class="content" v-html="item.content">{{item.content}}</p>
      <div class="cont_img">
        <img :src="item.pic" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name:'',
        pic:'',
        content:'',
        read_count:1,
        pos:0,
        itime:1560238205,
        title:'',
        keywords:'',
        description:'',
        type:''
      },

    }
  },
  methods: {
    ajax(id,typeid) {
      const p = this.promise("http://api.paopao.vip/news/type");

      // 新闻
      const p1 = this.promise("http://api.paopao.vip/news/item/one?id="+id);
      // 公告
      const p2 = this.promise("http://api.paopao.vip/notice/item/one?id="+id);

      p.then(data=>{
        (data.records).forEach(el => {
          if(el._id === typeid){
            this.item.type = el.type;
          }
        });
        if(this.item.type==='新闻'){
          return p1
        } else if (this.item.type==='公告'){
          return p2
        }
      }).then(data=>{
        this.item.name = data.name;
        this.item.content = data.content;
        this.item.pic = data.pic;
        this.item.itime = data.itime;
        this.item.read_count = data.read_count;
      })
    },
    promise(url){
      return new Promise((resolve,reject)=>{
        this.$axios.get(url).then(res=>{
          resolve(res.data.data)
        })
      })
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
      return year + "-" + month + "-" + day;
    },
    goback(){
      this.$router.go(-1);
    }
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    typeid() {
      return this.$route.query.typeid;
    }
  },
  mounted() {
    this.ajax(this.id,this.typeid);
  }
};
</script>

<style scoped>
.head_box {
  width: 100%;
  height: 170px;
  border-bottom: 1px solid #e6e6e6;
}
.title_box {
  width: 900px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
}
.back_arrow {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 60px;
  cursor: pointer;
}
.h1 {
  margin: 50px 0 30px 0;
}
.detail {
  display: flex;
}
.news {
  display: block;
  width: 50px;
  height: 21px;
  border-radius: 20px;
  background-color: #ffcc01;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}
.date {
  margin: 0 30px 0 50px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}
.times {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}
.body_box {
  width: 900px;
  margin: 40px auto;
}
.content {
  text-indent: 2em;
  font-size: 16px;
}
.cont_img {
  text-align: center;
  margin: 30px 0;
}
</style>
