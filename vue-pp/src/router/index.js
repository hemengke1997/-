import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/Index_main.vue'
import newsCenter from '../newscenter/Newscenter_main.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Home
    },
    {
      path: '/newscenter',
      name: 'newsCenter',
      component : newsCenter
    }
  ]
})