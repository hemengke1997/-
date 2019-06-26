
export default {
    changeData(state,msg){  
        state.data = msg
    },
    turnPage(state,msg){
        state.currentPage = msg
    }
}