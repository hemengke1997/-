<template>
    <div class="second">
        <div class="container">
            <div class="hot_goods_title">
                <span>PROP</span>
                <h1>热门商品</h1>
                <div class="title_bg"></div>
            </div>
            <div class="hot_goods_body">
                <ul class="goods_list">
                    <li v-for="(item,index) in tools" :key="index">
                        <div class="good_pic">
                            <img :src="item.picture[0]" alt="">
                        </div>
                        <div class="good_desc">
                            <h3>{{ item.name }}</h3>
                            <div class="price">
                                <span class="cast">￥</span>
                                <span class="money">{{ item.price }}</span>
                            </div>
                        </div>
                        <div class="add">
                            <div class="add_to_car">
                                <img src="../style/imgs/add_good.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <mycanvas></mycanvas>
        </div>
        <div class="person_animate" :class="{active:flag}"></div>
    </div>
</template>

<script>
import mycanvas from './Canvas';
export default {
    data(){
        return {
            tools:[],
            flag:false
        }
    },
    components:{
        mycanvas:mycanvas
    },
    methods:{
        ajax(){
            this.$axios.get("http://api.paopao.vip/store/items?limit=4").then(res=>{
                this.tools = res.data.data.records;
            })
        },
        handler(){
            const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(scrollTop >= 680) {
                this.flag = true;
            }
        }
    },
    mounted(){
        this.ajax()
        window.addEventListener('scroll',this.handler)
    }
}
</script>

<style scoped>
.second {
    width: 100%;
    height: 900px;
    position: relative;
}
.second .container {
    width: 1200px;
    height: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
}
.container .hot_goods_title {
    width: 145px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
}
.container .hot_goods_title>span {
    font-size: 30px;
    font-weight: bold;
    color: #cac6bf;
    margin-bottom: 15px;
}
.container .hot_goods_title>h1 {
    font-size: 36px;
}
.container .hot_goods_title .title_bg {
    width: 68px;
    height: 20px;
    position: absolute;
    left: -13px;
    bottom: -7px;
    background-color: #ffcc01;
    z-index: -1;
}
.hot_goods_body {
    width: 100%;
    height: 380px;
}
.hot_goods_body .goods_list {
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.hot_goods_body .goods_list>li {
    width: 285px;
    height: 360px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    position: relative;
}
.hot_goods_body .goods_list li .good_pic {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.hot_goods_body .goods_list li .good_desc {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.price {
    color: #ff9601;
    margin-top: 20px;
    margin-right: 10px;
}
.price .cast {
    font-size: 18px;
}
.price .money {
    font-size: 24px;
}
.hot_goods_body .goods_list .add {
    width: 130px;
    height: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
.hot_goods_body .goods_list .add_to_car {
    display: flex;
    flex-direction: row;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translateX(-50%);
    transition: width .3s ease-out,
 border-radius .3s ease-out;
    cursor: pointer;
}
.second .person_animate {
    width: 416px;
    height: 381px;
    position: absolute;
    left: -80px;
    bottom: -100px;
    background: url("../style/imgs/sec3_bazzi.png") no-repeat;
}
.second .person_animate.active {
    left: 0;
    bottom: 0;
    transition: all 1s linear 0.2s;
}
</style>
