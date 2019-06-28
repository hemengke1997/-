
export default {
    changeData(state,msg){ 
        state.data = msg
    },
    turnPage(state,{current,pageName}){
        if(pageName==='index'){
            state.currentPage = current
        } else if(pageName==='newscenter'){
            state.news_currentPage = current
        }
    },
    changeNewsItems(state,msg) {
        state.newsItems = msg
    }
}