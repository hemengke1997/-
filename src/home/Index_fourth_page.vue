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
            limit:8,
            length:this.count,
        }
      }
    },
    components:{
      videotab:videotab,
      videobox:videobox,
      Pagination: pagination
    },
    watch:{
      count() {
        // console.log(this.$store.state.videoCount,"222")
        this.allDatas.length = this.count;
        // console.log(this.allDatas.ll,"55555")
      }
    },
    mounted(){
      // console.log(this.$store.state.videoCount,"111");
      // console.log(this.allDatas.ll,"44")
    },
    computed:{
      count(){
        // console.log(this.$store.state.videoCount,"333")
        // console.log(this.allDatas.ll,"44")
        return this.$store.state.videoCount;
      }
    }
}

</script>

<style>

</style>
