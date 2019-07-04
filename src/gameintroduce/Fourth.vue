<template>
  <div class="fourth">
    <div class="main">
      <div class="question"></div>
      <div class="game_character"></div>
      <div class="character_desc">
        <div class="desc_content">
            <span class="name_ch">{{ character[isActive].name }}</span>
          <ul class="energy">
            <li>
              <img src="../style/imgs/light.png" alt class="icon" />
              <div class="energy_bar">
                  <img src="../style/imgs/energy_bar.png" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="character_model">
        <img :src="character[isActive].picture" alt />
      </div>
      <div class="main_bottom">
        <ul class="character_list">
          <li v-for="(item,index) in character" :key="index" :class="{active:isActive === index}" @click="changeRole(index)"> 
            <img :src="item.picture" alt />
          </li>
        </ul>
      </div>
    </div>
    <div class="pig_bg"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 角色的资料
            character:[],
            isActive:0
        }
    },
    methods:{
        ajax(){
            this.$axios.get("http://api.paopao.vip/store/roles").then(res=>{
                this.character = res.data.data;

            })
        },
        changeRole(index){
            this.isActive = index;
        }
    },
    mounted(){
        this.ajax();
    }
};
</script>

<style scoped>
.fourth {
  width: 100%;
  height: 720px;
  background: url("../style/imgs/fourth_bg.png") no-repeat;
  position: relative;
}
.fourth .pig {
  width: 201px;
  height: 266px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url("../style/imgs/extra-piggie-01.png") no-repeat;
}
.fourth .main {
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.fourth .main .question {
  width: 157px;
  height: 137px;
  position: absolute;
  top: -50px;
  left: 100px;
  background: url("../style/imgs/question-box.png") no-repeat;
}
.fourth .game_character {
  width: 220px;
  height: 189px;
  position: absolute;
  left: 0;
  top: 155px;
  background-image: url("../style/imgs/game_character.png");
}
.fourth .character_desc {
    width: 477px;
    height: 453px;
    background: url("../style/imgs/desc_bg.png") no-repeat;
    position: absolute;
    left: 350px;
    top: 120px;
}
.character_desc .desc_content {
    width: 430px;
    height: 350px;
    margin: 0 auto;
    padding-top: 60px;
}
.character_desc .name_ch {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-left: 10px;
}
.character_desc .name_en {
    font-size: 18px;
    font-weight: bold;
    color: #d2232a;
}
.desc_content>p {
    font-size: 14px;
    color: #fff;
    margin: 50px 0;
}
.desc_content .energy {
    width: 100%;
    height: 170px;
    margin-top: 100px;
}
.desc_content .energy li {
    height: 60px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
}
.desc_content .energy .icon {
    margin-left: -15px;
    width: 80px;
    height: 80px;
}
.desc_content .energy .energy_bar img {
    padding:0 0 1px 2px;
}
.desc_content .energy .energy_bar {
    width: 360px;
    height: 16px;
    background: url("../style/imgs/energy.png") no-repeat;
}
.character_model {
    width: 500px;
    height: 570px;
    position: absolute;
    left: 875px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main_bottom {
    width: 640px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}
.main_bottom .character_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.main_bottom .character_list img {
    height: 100px;
}
.main_bottom .character_list>li.active {
    border: 1px solid #fff;
    border-radius: 5px;   
}
.main_bottom .character_list>li {
    margin: 0 20px;
}
.main_bottom .character_list>li:hover {
    cursor: pointer;
}
</style>
