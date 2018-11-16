<template>
    <div class="main">
        <div class="banner">

        </div>
        <div class="catogery">
            <div class="innerlayout">
                <router-link to="/">
                    <span><img src="../static/travel.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
                <router-link to="/">
                    <span><img src="../static/building.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
                <router-link to="/">
                    <span><img src="../static/travel.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
                <router-link to="/">
                    <span><img src="../static/building.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
                <router-link to="/">
                    <span><img src="../static/travel.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
                <router-link to="/">
                    <span><img src="../static/one.png"></span>
                    <span class="title">自然风光</span>
                </router-link>
            </div>
        </div>
        <div class="catogery ticket">
            <div class="tickettitle">
                <div class="tiketname">
                    <span class="line"></span>
                    <span><i class="icon bgone"></i> <span>景点门票</span> </span>
                    <span class="line"></span>
                </div>
            </div>
            
            
            <div class="ticketlist">
                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/timg.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>
                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>

                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/timg.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>
                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>

                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>
                <router-link to="/" class="list">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>
               
            
            </div>
        </div>

        <div class="catogery ticket">
            <div class="tickettitle">
                <div class="tiketname">
                    <span class="line"></span>
                    <span><i class="icon bgone"></i> <span>人气推荐</span> </span>
                    <span class="line"></span>
                </div>
            </div>
            
            
            <div class="ticketlist">
                <router-link to="/" class="sentiment">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>

                <router-link to="/" class="sentiment">
                    <span>
                        <img src="/src/static/house.jpg">
                    </span>
                    <h3>
                        <span class="intro">雪山雪山雪山雪山</span>
                        <span class="price">￥500</span>
                    </h3>
                </router-link>

                
            
               
            
            </div>
        </div>
        
    </div>
</template>
<script>
import foot from '../components/foot.vue';
export default {
    data(){
        return {

        }
    },
    components:{
        font:foot
    }
}
</script>

<style>
.banner{
    height:25rem;
    width:100%;
    background-color: #7dbd75;
}
.catogery{
    width: 96%;
    padding: 1rem;
    background-color: #fff;
}
.catogery .innerlayout{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    border-top: 2px solid #151515;
    padding:1rem 0;
}
.catogery .innerlayout a{
    height:7rem;
    width:25%;
    display: block;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.catogery .innerlayout .title{
    color:#666;
}
.catogery .innerlayout a img{
    height:5rem;
    width:5rem;
    margin:auto;
}

.catogery .icon{
    display: block;
    width:40%;
    height:5rem;
    background: url('/src/static/attractions.png') no-repeat center;
}

.ticket{
    margin-top:1rem;
    padding-bottom: 0;
    padding-top: 0;
}
.ticket .tickettitle{
    padding: 0 15% 0 15%;
    width:70%;
}
.ticket .tiketname{
    width:100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
}
.ticket .tiketname span{
    height:5rem;
    text-align: center;
    line-height: 5rem;
    font-size: 1.8rem;
    color: #4c4c4c;
    display: flex;
    display: -webkit-flex;
}
.ticket .tiketname .line{
    height:2.5rem;
    border-bottom: 2px solid #000;
}

.ticketlist{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list{
    width: 48%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding-bottom: 1rem;
}

.list h3,.sentiment h3{
    display: flex;
    display: -webkit-flex;
}

.list .intro,.sentiment .intro{
    width: 45%;
    padding: 0.5rem 1rem;
    color: #666;
}
.list .price,.sentiment .price{
    text-align: right;
    color: #f98787;
    width: 45%;
    padding: 0.5rem 1rem;
}
.list span img,.sentiment span img{
    height: 14rem;
}
.sentiment{
    width: 100%;
}

</style>



