<template>
    <li>
      <a :href="Item[index].itemHref" class="txt">{{ Item[index].title }}</a>
      <span class="nav_bg active" v-if="!flag"></span>
    </li>
</template>

<script>
export default {
    props:['flag','Item','index'],
};
</script>

<style>
.txt {
  font-family: wenyue;
  font-size: 18px;
}
</style>
