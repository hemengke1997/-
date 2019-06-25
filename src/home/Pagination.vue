<template>
  <div class="pagination">
    <span
      class="btn-prev-page"
      :class="{disabled: currentPage===1}"
      @click="prevPage"
    >上一页</span>
    <ul class="pagination-ul">
      <li
        class="page-item"
        v-for="index in totalPage"
        :key="index"
        :class="{selected: currentPage === index}"
        @click="turnPage(index)"
      >{{ index }}</li>
    </ul>
    <span class="btn-next-page" :class="{disabled: currentPage === totalPage}" @click="nextPage">下一页</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    nextPage() {
       
    },
    prevPage() {
        
    },
    turnPage() {},
  },
  computed:{
  },
  mounted(){
      
  }
};
</script>


<style>
.pagination {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.pagination-ul,
.page-item {
  cursor: pointer;
}
.pagination-ul {
  display: flex;
  margin: 0 20px;
}
.page-item {
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
