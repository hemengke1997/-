<template>
    <div class="fourth">
      <div class="fourth_container">
        <span class="great_video"></span>

        <videotab></videotab>

        <videobox>
          
        </videobox>

        <Pagination :allDatas="allDatas"></Pagination>
      </div>
    </div>
</template>

<script>
import videobox from './Fourth_video_box'
import videotab from './Fourth_video_tab'
import pagination from './Pagination'
export default {
    data(){
      return{
        videoItem:[],
        allDatas:{
            pageName:'index',
            pageSize:8,
            dataLength:1,
            currentPage:1
        }
      }
    },
    components:{
      videotab:videotab,
      videobox:videobox,
      Pagination: pagination
    },
    watch:{
      dataLength(v,ov) {
        this.dataLength = v;
      }
    }
}
</script>

<style>

</style>
