<template>
  <div>
    <div class="head_box">
      <div class="title_box">
        <span class="back_arrow">返回</span>
        <h1 class="h1">{{item.title}}</h1>
        <div class="detail">
          <span class="news">{{}}</span>
          <span class="date">2019-06-02</span>
          <span class="times">浏览次数:5次</span>
        </div>
      </div>
    </div>
    <div class="body_box">
      <p class="content">内容</p>
      <div class="cont_img">
        <img src alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        // title:"",
        // type:"",
        // date:"",
        // times:0,
        // content:"",
        // imgsrc:""
      }
    };
  },
  methods: {
    ajax(id) {
        // const _this = this;
        const p = ()=> {
        return new Promise((resolve, reject)=>{
        this.$axios
            .get("http://api.paopao.vip/news/item/one?id=" + id)
            .then(res => {
              let data = res.data.data;
              resolve(data)
              console.log(this)
            });
        });
      };
      p().then(val=>{
          console.log(this,'111')
      })
    }
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  mounted() {
    this.ajax(this.id);
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
