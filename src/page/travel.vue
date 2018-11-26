<template>
    <div class="main">
        <div class="bg">
            <div class="address">
                <span class="current"> <span class="currentaddress">深圳</span> <i><img src="../static/tow.png"></i></span>
                <span class="weather">天气:* (适合出行)</span>
            </div>
            <div class="search">
                <div><input type="text" value="" placeholder="请输入搜索内容"></div>
            </div>
            <div class="travelbanner">

            </div>
            <div class="tarvelcategory">
                <router-link to="/">
                    <i>
                        <img src="../static/hot.png">
                    </i>
                    <span>找景点</span>
                </router-link>
                <router-link to="/">
                    <i>
                        <img src="../static/hot.png">
                    </i>
                    <span>找景点</span>
                </router-link>
                <router-link to="/">
                    <i>
                        <img src="../static/hot.png">
                    </i>
                    <span>找景点</span>
                </router-link>
            </div>
        </div>

        <div class="recommended">
                <div class="recommendline">
                    <div class="recommendtitle">
                        <h3>编辑推荐</h3>
                        <router-link to="">更多</router-link>
                    </div>
                </div>
                <div class="recommendlist">
                    <router-link to="/">
                        <div class="travels">
                            <h4>哈哈哈哈或或或或或或或或或或或或或或或或或或或或</h4>
                            <div class="travelsInfo">
                                <span class="tag">推荐</span>
                                <span class="name">哈哈</span>
                                <span>562万浏览量</span>
                                <span class="time">1个小时</span>
                            </div>
                        </div>
                        <div class="tarvelimg">
                            <img src="../static/timg.jpg">
                        </div>  
                    </router-link>

                    <router-link to="/">
                        <div class="travels">
                            <h4>哈哈哈哈或或或或或或或或或或或或或或或或或或或或</h4>
                            <div class="travelsInfo">
                                <span class="tag">推荐</span>
                                <span class="name">哈哈</span>
                                <span>562万浏览量</span>
                                <span class="time">1个小时</span>
                            </div>
                        </div>
                        <div class="tarvelimg">
                            <img src="../static/timg.jpg">
                        </div>  
                    </router-link>

                    <router-link to="/">
                        <div class="manyimgs">
                            <h4>哈哈哈哈或或或或或或或或或或或或或或或或或或或或</h4>
                            <div class="manyimg">
                                <div class="manys">
                                    <img src="../static/timg.jpg">
                                </div> 
                                <div class="manys">
                                    <img src="../static/timg.jpg">
                                </div> 
                                <div class="manys">
                                    <img src="../static/timg.jpg">
                                </div>  
                            </div>
                             
                            <div class="travelsInfo">
                                <span class="name">哈哈</span>
                                <span>562万浏览量</span>
                                <span class="time">1个小时</span>
                            </div>
                        </div>
                       
                    </router-link>
                    
                </div>
            </div>
    <font></font>
    </div>
</template>

<script>
import foot from '../components/foot.vue';
export default {
    dat(){
        return {

        }
    },
    components:{
        font:foot
    }
}
</script>

<style>
.bg{
    background: #fff;
}
.address,.current{
    display: flex;
    display: -webkit-flex;
}
.address .current  img{
    height: 1.5rem;
    width: 12%;
    margin: 0.7rem 0;
}
.currentaddress{
    width: 20%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
}

.weather{
    height:3rem;
    line-height: 3rem;
    text-align: right;
    padding-right: 1rem;
}
   
.search input{
    height: 3rem;
    border: 3px solid #d0cbcb;
    margin: 1rem;
    width: 90%;
    border-radius: 2rem;
    padding-left: 2rem;
    font-size: 1rem;
    outline: none;
    background: #f1f1f1;
    }

.travelbanner{
    height:10rem;
    width: 100%;
    background: #f5f5f5;
}

.tarvelcategory{
    display: flex;
    display: -webkit-flex;
}
.tarvelcategory a{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding: 1rem;
}
.tarvelcategory a img{
    height: 2.5rem;
    width: 20%;
    margin: 0 auto;
}
.tarvelcategory a span{
    text-align: center;
    font-size:1.2rem;
    height: 3rem;
    line-height: 3rem;
}
   


.recommended{
    margin-top:1rem;
     background: #fff;
}
.recommended .recommendlist{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}

.recommended .recommendlist a{
    width:100%;
    padding:1rem;
    display: flex;
    display: -webkit-flex;
}
.recommended .recommendlist .servericon{
    height: 5.5rem;
    width: 100%;
    display: block;
    background: url('../static/collection.png') no-repeat center 80%;
    background-size: 22%;
}
.recommended .recommendline{
    border-bottom: 2px solid #565656;
}
.recommended .recommendline .recommendtitle{
    width: 90%;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
}
.recommended .recommendline .recommendtitle h3{
    height: 5rem;
    line-height: 5rem;
    font-size: 1.4rem;
    color:#6f6f6f;
}
.recommended .recommendline .recommendtitle a{
    text-align: right;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.2rem;
}  
.travels h4,.manyimgs h4{
    font-size: 1.2rem;
    width: 90%;
    height: 7rem;
}
.travels .travelsInfo,.manyimgs .travelsInfo{
    width: 90%;
    display: flex;
    display: -webkit-flex;
}
.travels .travelsInfo span,.manyimgs .travelsInfo span{
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
}
.travels .travelsInfo .tag,.manyimgs .travelsInfo .tag{
    width: 35%;
    text-align: center;
    border: 3px solid red;
    color: red;
    border-radius: 0.4rem;
}
.travels .travelsInfo .name,.manyimgs .travelsInfo .name{
    width: 55%;
    text-align: center;
}
.travels .travelsInfo .time,.manyimgs .travelsInfo .time{
    text-align: right;
}
.tarvelimg{
    width: 60%;
}
.tarvelimg img{
    height:9rem;
    border-radius: 1rem;
}

.manyimgs h4 {
    height: 3.5rem;
}
.manyimgs .manyimg{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
}     
.manyimgs .manyimg .manys{
    width: 32%;
    padding:0.5rem;
} 
.manyimgs .manyimg .manys img{
    border-radius: 1rem;
}
.manyimgs .travelsInfo .name{
    width: 30%;
}
</style>

