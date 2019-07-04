<template>
    <div class="third">
        <div class="tab_box">
            <ul class="tab_list">
                <li v-for="(val,key,index) in categories" :key="index"
                @click="getToolsByType(key,index)" :data-id="key">
                    <span :class="['txt',{active:index === isActive}]">{{ val }}</span>
                    <div class="yellow_bg" v-show="index === isActive"></div>
                </li>
            </ul>
        </div>
        <div class="all_pic_box">
            <div class="pic_box">
                <ul class="pic_list">
                    <li v-for="(item,index) in tempItems" :key="index">
                        <div class="img_box">
                            <img :src="item.picture[0]" alt="">
                        </div>
                        <span class="label">{{ item.name }}</span>
                        <div class="pic_li_body">
                            <div class="goods_name">{{ item.name }}</div>
                            <span class="goods_price">￥{{ item.price }}</span>
                        </div>
                        <img src="../style/imgs/buypkkjk.png" class="buy_button" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories:{},
            isActive:0,
            tempItems:[],
            firstId:0,
        }
    },
    methods:{
        ajax(){
            this.$axios.get("http://api.paopao.vip/store/categories_map").then(res=>{
                this.categories = res.data.data;
                for(let key in this.categories){
                    if(this.categories[key] === '饰品'){
                        this.$delete(this.categories,key)
                    }
                }
                this.firstId = Object.keys(this.categories)[0];
                this.getToolsByType(this.firstId,0);
            })
        },
        // 获取对应类型的道具
        getToolsByType(id,index){
            this.$axios.get("http://api.paopao.vip/store/items?limit=10&category_id="+id).then(res=>{
                this.tempItems = res.data.data.records;
                this.isActive = index;
            })
        },
    },
    computed:{
    },
    watch:{
        // firstId(v,ov){
        //     this.getToolsByType(v,0)
        // }
    },
    mounted(){
        this.ajax();
    }
}
</script>

<style scoped>
.third {
    width: 100%;
    height: 840px;
}
.third .tab_box {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.third .tab_list {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1
}
.third .tab_list>li{
    margin: 0 40px;
    cursor: pointer;
    position: relative;
}
.tab_list .txt {
    color: #edcfce;
}
.tab_list .txt:hover,
.tab_list .txt.active {
    color: #fff;
}
.third .tab_list .yellow_bg {
    width: 36px;
    height: 8px;
    position: absolute;
    left: -12px;
    top: 15px;
    background-color: #ffcc01;
    z-index: -1;
}
.all_pic_box {
    width: 100%;
    height: 800px;
    border-top: 1px solid #f03d2b;
}
.third .all_pic_box .pic_box {
    width: 1200px;
    height: 800px;
    margin: 0 auto;
    margin-top: 40px;
}
.third .all_pic_box .pic_box .pic_list {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.third .all_pic_box .pic_box .pic_list li {
    width: 210px;
    height: 330px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, .5);
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 15px 25px 15px;
}

.third .all_pic_box .pic_box .pic_list li.active {
    border: 3px solid #ff9601;
}
.third .all_pic_box .pic_box .pic_list li .label {
    display: block;
    width: 36px;
    height: 18px;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    background-color: #000;
}
.pic_box .pic_list li .pic_li_body {
    width: 210px;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0px 10px;
    position: relative;
}
.pic_box .pic_list li .pic_li_body .goods_name {
    font-size: 14px;
    font-weight: 700;
}
.goods_price {
    font-size: 16px;
    font-weight: 700;
    color: #ff9601;
    margin-top: 24px;
}
.buy_button {
    position: absolute;
    right: 18px;
    bottom: 13px;
    cursor: pointer;
}
.img_box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
