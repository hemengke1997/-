
export default {
    changeData(state,payload){ 
        state.data = payload.records;
        state.videoCount = payload.count;
        state.videoTotalPage = payload.totalPage;
        state.currentPage = payload.current;
    },
    turnPage(state,payload){
        if(payload.pageName==='index'){
            state.currentPage = payload.current
        } else if(payload.pageName==='newscenter'){
            state.news_currentPage = payload.current
        }
    },
    changeNewsItems(state,payload) {
        state.newsItems = payload.records;
        state.newsCount= payload.count;
        state.newsTotalPage = payload.totalPage;
        state.news_currentPage = payload.current;
    }
}