<template>
    <div class="fourth">
      <div class="fourth_container">
        <span class="great_video"></span>

        <videotab></videotab>

        <videobox>
          
        </videobox>

        <Pagination></Pagination>
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
      }
    },
    components:{
      videotab:videotab,
      videobox:videobox,
      Pagination: pagination
    }
}

</script>

<style>

</style>
