
export default {
    changeNews(state,news){ 
        state.news = news;
    },
    changeOther(state,payload) {
        state.currentPage = payload.currentPage;
        state.count = payload.count;
        state.totalPage = payload.totalPage;
    },
    changeNotice(state,notice) {
        state.notice = notice
    },
    changeData(state,data){
        state.data = data;
    },
    changeVideo(state,video){
        state.video = video;
    },
}