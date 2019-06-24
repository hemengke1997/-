<template>
    <div class="fourth">
      <div class="fourth_container">
        <span class="great_video"></span>
        <videotab></videotab>
        <videobox></videobox>

        <!-- 分页模块 -->
        <div class="pagination"></div>
      </div>
    </div>
</template>

<script>
import videobox from './Fourth_video_box'
import videotab from './Fourth_video_tab'
export default {
    components:{
      videotab:videotab,
      videobox:videobox
    }
}
</script>

<style>

</style>
