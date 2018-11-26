<template>
    <div class="main">
        <div class="banner">
            <div class="userheadinfo">
                <div class="userimg">
                    <img src="../static/head.png">
                </div>
                <div class="username">
                    <span>示范法</span>
                    <router-link to="/">会员中心</router-link>
                </div>
            </div>
            <div class="wallet">
                <div class="walletinfo">
                    <span class="num">234</span>
                    <span>余额</span>
                </div>
                <div class="walletinfo">
                    <span class="num">234</span>
                    <span>余额</span>
                </div>
                <div class="walletinfo">
                    <span class="num">234</span>
                    <span>余额</span>
                </div>
                <div class="walletinfo">
                    <span class="num">156.89</span>
                    <span>余额</span>
                </div>
                <div class="walletinfo">
                    <router-link to="/">提现</router-link>
                </div>
            </div>
        </div>
        
        <div class="order">
            <div class="orderline">
                <div class="ordertitle">
                    <h3>我的订单</h3>
                    <router-link to="/">全部订单 > </router-link>
                </div>
            </div>

            <div class="orderstatus">
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待审核
                        </span>
                    </router-link>
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待支付
                        </span>
                    </router-link>
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待审核
                        </span>
                    </router-link>
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待支付
                        </span>
                    </router-link>
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待审核
                        </span>
                    </router-link>
                    <router-link to="/">
                        <i class="ordericon"></i>
                        <span>
                            待支付
                        </span>
                    </router-link>
                    
            </div>
            
        </div>
        <div class="service">
            <div class="orderline">
                <div class="ordertitle">
                    <h3>我的服务</h3>
                </div>
            </div>
            <div class="serverlist">
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                 <router-link to="/">
                    <i class="servericon"></i>
                    <span>我的收藏</span>
                </router-link>
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                 <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
                <router-link to="/">
                    <i class="servericon"></i>
                    <span>个人信息</span>
                </router-link>
            </div>
        </div>
        <font></font>
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
    width:100%;
    background-color: #82cc9c;
}
.userheadinfo{
    height: 16rem;
    display: flex;
    display: -webkit-flex;
    align-items: flex-end;
}
.userimg,.username{
    height:6rem;
    width: 6rem;
    padding-left: 3rem;
}

.username{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding-left: 1rem;
}
.username span{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.8rem;
    color: #484848;
    padding-top: 0.4rem;
}
.username a{
    color:#fff;
    font-size: 1.2rem;
}

.wallet{
    display: flex;
    display: -webkit-flex;
    width: 90%;
    margin: 1.5rem auto 0;
    background-color: #1d1d1d;
    border-radius: 1rem 1rem 0 0;
}

.walletinfo{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
}

.walletinfo span{
    text-align: center;
    color: #fff;
    height: 2.5rem;
}
.walletinfo .num{
    height: 3rem;
    line-height: 3.8rem;
    font-size: 1.6rem;
}
.walletinfo a{
    text-align: center;
    background-color: #924d05;
    height: 3rem;
    width: 50%;
    display: block;
    line-height: 3rem;
    margin: 1.3rem auto;
    border-radius: 1rem;
    color: #fff;
}

.order,.service{
    background-color: #fff;
}
.order .orderline,.service .orderline{
    border-bottom: 1px solid #565656;
}
.order .orderline .ordertitle,.service .orderline .ordertitle{
    width: 90%;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
}
.order .orderline .ordertitle h3,.order .orderline .ordertitle a,.service .orderline .ordertitle h3{
    height: 6rem;
    line-height: 6rem;
    font-size: 1.4rem;
    color:#6f6f6f;
}
.order .orderline .ordertitle a{
    color:#848383;
    text-align: right;
    font-size: 1.2rem;
}
.orderstatus{
    width: 90%;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
}
.orderstatus a{
    height: 5rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding: 2rem 0;
}
.orderstatus a .ordericon{
    height: 3rem;
    width: 100%;
    display: block;
    background: url('../static/order.png') no-repeat center;
}
.orderstatus a span{
    text-align: center;
    color:#666;
    font-size: 1rem;
}

.service{
    margin-top:1rem;
}
.service .serverlist{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}

.service .serverlist a{
    height: 8rem;
    width:25%;
    position: relative;
}
.service .serverlist .servericon{
    height: 4.5rem;
    width: 100%;
    display: block;
    background: url('../static/collection.png') no-repeat center 80%;
    background-size: 22%;
}
.service .serverlist a::before{
    content: '';
    display: block;
    height:100%;
    width:99.5%;
    border-right:3px solid #c1c1c1;
    border-bottom:3px solid #c1c1c1;
    float: left;
    
}
.service .serverlist a span{
    position: absolute;
    left: 0;
    width: 100%;
    display: block;
    text-align: center;
    color:#666;
    font-size: 1rem;
}
/*
.service .serverlist a span{
    text-align: center;
    width: 100%;
    display: block;
    color:#666;
}
*/
</style>



