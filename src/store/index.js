import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    // 状态管理
    state:{
        data:[],
        currentPage:1,
        pageSize:8
    },
    
    // 无副作用方法，唯一用于改变state的地方    只能同步
    mutations:{
        
    },
    // 副作用方法，用于进行逻辑判断，以及拉取数据  可以有异步操作
    actions:{
        
    }
})