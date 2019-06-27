<template>
  <ul class="role_ul">
    <li class="role_item" v-for="(roleitem,index) in roleItem" :key="index">
      <span class="role_name">{{ roleItem[index].rolename }}</span>
      <img class="role_pic" :src="roleItem[index].picsrc" alt="">
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      roleItem: [
        { rolename: "蘑菇头", picsrc: require("../style/imgs/sub01_char02.png") },
        { rolename: "中分", picsrc: require("../style/imgs/sub01_char0400.png") },
        { rolename: "平头哥", picsrc: require("../style/imgs/sub01_char03.png") },
        { rolename: "小黄人", picsrc: require("../style/imgs/sub01_char01.png") }
      ]
    };
  }
};
</script>

<style>
</style>
