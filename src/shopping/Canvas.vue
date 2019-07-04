<template>
    <div class="choose_role">
        <div class="role_left">
            <canvas id="role_canvas" width="480" height="490px"></canvas>
            <div class="role_head_box">
                <ul class="role_head_ul">
                    <li class="role_head_li" v-for="(item,index) in roles" :key="index" @click="draw(index)">
                        <div class="role_head" :class="{active:isActive===index}">
                            <img :src="item.picture" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="arrow_left" @click="clickLeft"></div>
            <div class="arrow_right" @click="clickRight"></div>
        </div>
        <div class="role_right" style="display:none">
            <div class="role_clothes">
                <span class="arrow_back"></span>
                <div class="clothes">
                    <span>头饰</span>
                </div>
            </div>
            <div class="head_box">
                <div class="head_ul">
                    <div class="head_li"></div>
                </div>
                <div class="ok_button">
                    <span>OK</span>
                </div>
            </div>
        </div>
        <div class="role_right">
            <div class="cart_title">
                <div class="cart">
                    <span>购物车</span>
                </div>
                <div class="close_cart"></div>
            </div>
            <div class="goods_list">
                <ul class="goods_ul">
                    <li class="goods_item" v-for="(item,index) in tools" :key="index">
                        <img src="../style/imgs/water_poket.png" alt="">
                        <span>{{ item.name }}</span>
                        <span class="add_goods"></span>
                    </li>
                </ul>
                <button class="reset" disabled="disabled">
                    <span>RESET</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            roles:[],
            isActive:0,
            tools:[],
        }
    },
    methods:{
        ajaxRole(){
            this.$axios.get("http://api.paopao.vip/store/roles").then(res=>{
                this.roles = res.data.data;
                this.draw(0);
            })
        },
        draw(index){
            this.clearCanvas();
            this.changeActive(index);
            let img = new Image();
            img.src = this.roles[index].picture;
            img.onload = () => {
                this.context.drawImage(img,110,120);
            }
        },
        // 清空canvas
        clearCanvas() {
            var c = document.getElementById('role_canvas');
            this.context.clearRect(0,0,c.width,c.height);
        },
        // 点击时改变isActive
        changeActive(index) {
            this.isActive = index;
        },
        clickLeft() {
            if(this.isActive===0){
                this.isActive = this.roles.length - 1;
                this.draw(this.isActive)
            } else {
                this.isActive--;
                this.draw(this.isActive);
            }
        },
        clickRight() {
            if(this.isActive===this.roles.length-1){
                this.isActive=0;
                this.draw(this.isActive);
            } else {
                this.isActive++;
                this.draw(this.isActive);
            }
        },
        ajaxTools() {
            this.$axios.get("http://api.paopao.vip/store/categories").then(res=>{
                this.tools = res.data.data;
                console.log(this.tools)

            })
        }
    },
    computed:{
        context(){
            return document.getElementById('role_canvas').getContext('2d');
        }
    },
    watch:{
        // roles(){
        //     this.draw(0)
        // }
    },
    mounted(){
        this.ajaxRole();
        this.ajaxTools();
    }
}
</script>

<style scoped>
.choose_role {
    width: 960px;
    height: 640px;
    position: absolute;
    bottom: 39px;
    display: flex;
}
.choose_role .role_left {
    width: 480px;
    height: 640px;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
}
.choose_role .role_left #role_canvas {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}
.role_head_box {
    overflow: hidden;
    position: absolute;
    left: 50%;
    bottom: 65px;
    transform: translateX(-50%);
}
.role_left .role_head_ul {
    display: flex;
    width: 290px;
}
.role_left .role_head_ul .role_head_li {
    margin: 0 4px;
}
.role_left .role_head_ul .role_head_li .role_head {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
} 
.role_left .role_head_ul .role_head_li .role_head.active {
    border: 1px solid #000;
}
.role_left .role_head_ul .role_head_li .role_head img {
    cursor: pointer;
    height: 50px;
}
.role_left .role_head_ul .role_head_li .role_head img.active {
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid #ff9601;
}
.role_left .arrow_left {
    width: 17px;
    height: 31px;
    background: url("../style/imgs/arrowmmleft.png") no-repeat;
    position: absolute;
    left: 30px;
    top: 265px;
    cursor: pointer;
}
.role_left .arrow_right {
    width: 17px;
    height: 31px;
    background: url("../style/imgs/arrowmmright.png") no-repeat;
    position: absolute;
    right: 30px;
    top: 265px;
    cursor: pointer;
}
.choose_role .role_right {
    width: 480px;
    height: 640px;
    background-color: #f6f6f6;
    border-radius: 0 10px 10px 0;
}
.role_right .role_clothes, .role_right .cart_title {
    height: 80px;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.role_right .role_clothes .arrow_back {
    display: block;
    width: 12px;
    height: 11px;
    background: url("../style/imgs/zu30.png");
    margin-left: 30px;
    cursor: pointer;
}
.role_right .role_clothes .clothes {
    margin-right: 30px;
}
.role_right .role_clothes .clothes span {
    font-size: 24px;
    font-weight: 700;
    color: #d8d8d8;
    font-family: sans-serif, '黑体';
}
.role_right .head_box .head_ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 20px;
}
.role_right .head_box .head_ul .head_li {
    margin: 10px;
}
.role_right .head_box .ok_button {
    width: 150px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff9601;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
}
.role_right .cart_title .cart {
    color: #d8d8d8;
    font-size: 24px;
    font-weight: 700;
    margin-left: 40px;
    margin-right: 20px;
}
.role_right .close_cart {
    display: block;
    width: 25px;
    height: 25px;
    position: relative;
    margin-right: 38px;
    cursor: pointer;
}
.role_right .cart_title .close_cart::before {
    transform: rotate(45deg);
}
.role_right .cart_title .close_cart::after {
    transform: rotate(-45deg);
}
.role_right .cart_title .close_cart::before, .role_right .cart_title .close_cart::after {
    content: "";
    position: absolute;
    height: 25px;
    width: 1.5px;
    top: 0;
    right: 12px;
    background-color: #000;
}
.role_right .goods_list .goods_ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
.role_right .goods_list .goods_ul .goods_item .add_goods {
    width: 22px;
    height: 22px;
    background: url("../style/imgs/buypkkjk.png") no-repeat;
    position: absolute;
    right: 40px;
}
.goods_item .delete_goods {
    display: none;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    margin-left: 235px;
}
.role_right .reset {
    width: 150px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    color: #999;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    outline: none;
    border: 0;
}
.role_right .goods_list .goods_ul .goods_item {
    width: 400px;
    height: 60px;
    background-color: #fff;
    margin: 10px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.role_right .goods_list .goods_ul .goods_item:hover {
    background-color: #ebebeb;
    transform: translateY(-5px);
    transition: all 0.1s linear;
}
.goods_ul .goods_item img {
    margin: 0 20px;
}
</style>
