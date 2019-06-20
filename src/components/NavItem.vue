<template>
    <li>
      <a :href="Item[index].itemHref">{{ Item[index].title }}</a>
      <span class="nav_bg active" v-if="!flag"></span>
    </li>
</template>

<script>
export default {
    props:['flag','Item','index'],
};
</script>

<style>

</style>
