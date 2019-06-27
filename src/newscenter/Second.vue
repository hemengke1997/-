<template>
    <div>
        <div class="news_tab">
            <ul class="tab_ul">
                <li v-for="(item, index) in tab" :key="index" :class="['tab_li',{active:11}]">
                    <span class="name_en">{{ item.name_en }}</span>
                    <div class="name_box">
                        <span class="name_ch">{{ item.name_ch }}</span>
                        <span class="name_bg" v-show="1"></span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="news_box">
            <ul class="news_ul">
                <li class="news_item">
                    <div class="news">
                        <div class="news_text">
                            <div class="news_logo">新闻</div>
                            <div class="news_body">
                                <div class="news_title">标题</div>
                                <div class="news_content">内容</div>
                            </div>
                        </div>
                        <div class="news_date" v-show="1">2019-06-02</div>
                        <div class="news_arrow" v-show="0"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tab:[
                {name_ch:'最新',name_en:'NEW'},
                {name_ch:'新闻',name_en:'NEWS'},
                {name_ch:'公告',name_en:'NOTICE'},
            ],
            tempItem:[]
        }
    },
    methods:{
        ajax(){
            this.tempItem = this.$store.state.newsItems;  
        }
    }
}
</script>

<style>
.news_tab {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
}
.news_tab .tab_ul {
    width: 290px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.news_tab .tab_ul .tab_li {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6f6f6f;
    margin: 0 95px;
    width: 40px;
    height: 35px;
}
.news_tab .tab_ul .tab_li.active {
    color: #000;
}
.news_tab .tab_ul .tab_li:nth-child(1){
    margin: 0
}
.news_tab .tab_ul .tab_li:nth-last-child(1){
    margin: 0
}
.name_en {
    font-size: 12px;
    font-family: wenyue;
    display: block;
    width: 40px;
    text-align: center;
}
.name_box {
    position: relative;
    width: 40px;
    height: 20px;
    text-align: center;
}
.name_ch {
    font-size: 16px;
    font-family: wenyue;
}
.name_bg{
    position: absolute;
    left: 0px;
    bottom: -1px;
    width: 21px;
    height: 8px;
    background-color: #ffcc01;
    z-index: -1;
}
.news_box {
    width: 100%;
    height: 790px;
    background: url("../style/imgs/bg_bottom.png") no-repeat;
}
.news_box .news_item {
    height: 120px;
    cursor: pointer;
}
.news_box .news_item:hover {
    background: url('../style/imgs/text-bg.png') no-repeat;
}
.news_box .news_item .news {
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    border-bottom: 1px dashed #6f6f6f;
    position: relative;
    transition: left 0.2s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.news_box .news_item .news.active {
    left: -50px;
}
.news_box .news_item .news .news_text {
    width: 860px;
    height: 120px;
    display: flex;
    padding-top: 50px;
}
.news_box .news_item .news .news_text .news_logo {
    width: 36px;
    height: 18px;
    font-size: 14px;
    background-color: #ffcc01;
    border-radius: 8px;
    text-align: center;
    line-height: 18px;
    font-family: wenyue;
}
.news_body {
    margin: -3px 0 0 10px;
}
.news_title {
    font-size: 20px;
    font-family: wenyue;
}
.news_content {
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    color: #6f6f6f;
    font-family: wenyue;
    margin-top: 5px;
}
.news_date {
    font-size: 16px;
    font-family: wenyue;
}
.news_arrow {
    width: 34px;
    height: 15px;
    background: url("../style/imgs/arrow-right.png") no-repeat;
}

</style>
