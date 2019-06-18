// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //引入组件 组件的标签名叫做 App
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },   //在这里注册了组件 因为引入了组件 组件还没有生效 在components里面写了 才能用
  template: '<App/>' //  这个模板最后会插入到 id = #app 的这个html元素中
})
