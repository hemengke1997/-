<template>
  <div class="pagination">
    <span class="btn-prev-page" :class="{disabled: currentPage===1}" @click="prevPage">上一页</span>

    <ul class="pagination-ul">
      <span class="ellipsis" v-show="firstSpanShow">...</span>

      <li
        class="page-item"
        v-for="(item,index) in tempTotal"
        :key="index"
        :class="{selected: currentPage === item}"
        @click="turnPage(item)"
      >{{ item }}</li>

      <span
        class="ellipsis"
        v-show="lastSpanShow"
      >...</span>
    </ul>

    <span class="btn-next-page" :class="{disabled: currentPage === totalPage}" @click="nextPage">下一页</span>
  </div>
</template>


<script>
export default {
  props:['allDatas'],
  data() {
    return {
      ellipsisFlag: true,
      tempTotal: [],
      // 页码数量
      pageLength:5
    };
  },
  methods: {
    // 改变页码的样式
    changePageStyle() {
      let current = this.currentPage;
      if (this.totalPage > 5) {
        if (current >= 3 && current <= this.totalPage - 3) {
          this.tempTotal = [];
          for (let i = current - 2; i <= current + 2; i++) {
            this.tempTotal.push(i);
          }
        }
        if (current > this.totalPage - 3) {
          this.tempTotal = [];
          for (let i = this.totalPage - 4; i <= this.totalPage; i++) {
            this.tempTotal.push(i);
          }
        }
      }
    },
    nextPage() {
      if (this.currentPage != this.totalPage) {
        this.$store.state.currentPage++;
        this.changePageStyle();
      }
    },
    prevPage() {
      if (this.currentPage != 1) {
        this.$store.state.currentPage--;
        this.changePageStyle();
      }
    },
    // 点击页码时的效果
    turnPage(current) {
      this.$store.state.currentPage = current;
      this.changePageStyle()
      if (current < 3) {
        this.tempTotal = [];
        this.pageChanged();
      }
    },
    // 总页数改变时执行  改变分页器的样式
    pageChanged() {
      this.tempTotal = [];
      if (this.totalPage > this.pageLength) {
        for (var i = 1; i <= this.pageLength; i++) {
          this.tempTotal.push(i);
        }
      } else {
        for (var i = 1; i <= this.totalPage; i++) {
          this.tempTotal.push(i);
        }
      }
    }, 
},
  
  computed: {
    totalPage() {       
      return this.$store.state.totalPage;
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
    firstSpanShow(){
      return this.currentPage>3&&this.totalPage>5
    },
    lastSpanShow(){
      return (this.currentPage > 3 && this.currentPage <= this.totalPage - 3 || this.currentPage <= 3) && this.totalPage > 5
    }
  },
  watch: {
    totalPage(v,ov) {
      this.pageChanged();
    },
    
  },
  mounted(){
    this.pageChanged()
  }
};
</script>


<style scoped>
.pagination {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.page-item {
  cursor: pointer;
}
.pagination-ul {
  display: flex;
  margin: 0 20px;
}
.page-item,
.ellipsis {
  margin: 0 8px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: wenyue;
}
.page-item:hover,
.page-item.selected {
  background-color: rgba(255, 255, 255, 0.2);
}
.btn-prev-page,
.btn-next-page {
  display: flex;
  font-family: wenyue;
  font-size: 16px;
  width: 70px;
  height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
}
.btn-prev-page:hover,
.btn-next-page:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.disabled {
  cursor: not-allowed;
}
.btn-prev-page {
  margin: 0 -8px 0 8px;
}
.btn-next-page {
  margin: 0 8px 0 -8px;
}
</style>
