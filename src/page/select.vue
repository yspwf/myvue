<template>
    <div class="ordermain">
        <div class="house">
            <div class="housetitle">
                <span>华侨酒店</span>
            </div>
            <div class="houseinfo">
                <div class="houseinfos">
                    <span>房型: 豪华</span>
                </div>
                <div class="houseinfos">
                    <span>入住: 10-24</span>
                    <span>离店: 10-25</span>
                    <span>共一晚</span>
                </div>
                <div class="houseinfos">
                    含早  大床
                </div>
            </div>
           
        </div>

        <div class="order">
            <h5>请填写入住信息</h5>
            <div class="orderinfos">
                <span>房间数</span>
                <input type="text" value="1间" readonly>
            </div>
            <div class="orderinfos">
                <span>入住人</span>
                <input type="text" value="" placeholder="请填写入住人" readonly>
            </div>
            <div class="orderinfos">
                <span>联系人</span>
                <input type="text" value="" placeholder="请填写联系人">
            </div>
            <div class="orderinfos">
                <span>手机号</span>
                <input type="text" value="" placeholder="请填写手机号码">
            </div>
        </div>
        <div class="order">
            <h5>优惠券</h5>
            <div class="orderinfos">
                <span>优惠券</span>
                <input type="text" value="" placeholder="请选择" readonly>
            </div>
            <!-- <div class="orderinfos">
                <span>入住人</span>
                <input type="text" value="" placeholder="请填写入住人" readonly>
            </div>
            <div class="orderinfos">
                <span>联系人</span>
                <input type="text" value="" placeholder="请填写联系人">
            </div>
            <div class="orderinfos">
                <span>手机号</span>
                <input type="text" value="" placeholder="请填写手机号码">
            </div> -->
        </div>
         <div class="order">
            <div class="notice">
                温馨提示:请入住旅客携带好相关证件
            </div>
        </div>
        <div class="price">
            <span class="pricetitle">订单金额</span>
            <span class="pricenum">￥888.00</span>
            <span class="orderbtn">
                <button>提交订单</button>
            </span>
        </div>
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
.ordermain{
    background: #efefef;
    padding: 1rem 0 0 0;
    width: 100%;
}
.house{
    display: flex;
    display: -webkit-flex;
    margin: 0rem auto;
    padding: 1rem 0;
    flex-direction: column;
    width: 96%;
    background: #fff;
}
.house .housetitle{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.8rem;
    border-bottom: 3px solid #adabab;
   
}
.house .housetitle span{
    width: 97%;
    padding-left: 1rem;
}
.house .houseinfo{
    width: 100%;
}
.house .houseinfo .houseinfos{
    font-size: 1.2rem;
    padding: 0 1rem;
    height: 2rem;
    line-height: 2.5rem;
    width: 90%;
}
.house .houseinfo span{
    width: 25%;
}
.order{
    background: #fff;
    width: 100%;
    margin: 1rem 0;
}
.order h5{
    font-size: 1.5rem;
    padding:0.5rem;
    width: 90%;
}
.order .orderinfos{
    width: 94%;
    padding: 1rem;
    display: flex;
    display: -webkit-flex;
    border-bottom: 1px solid #ababab;
}
.order .orderinfos span{
    height: 2.5rem;
    line-height: 2.5rem;
    width: 20%;
    font-size: 1.3rem;
}
.order .orderinfos input{
    border:none;
    padding-left: 1rem;
    font-size: 1.2rem;
    outline: none;
}
.order .notice{
    width: 95%;
    margin: 0 auto;
    height: 2rem;
    line-height: 2rem;
}

.price{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    text-align: center;
    background: #fff;
    position: fixed;
    bottom: 0;
}
.price span{
    height: 5rem;
    line-height: 5rem;
}
.price .pricetitle{
    width: 30%;
}
.pricenum{
    font-size: 1.8rem;
    color:red;
    width: 40%;
}
.price .orderbtn{
    text-align: right;
    padding-right: 2rem;
}
.price .orderbtn button{
    height: 3rem;
    border: none;
    width: 50%;
    font-size: 1.5rem;
    color: #fff;
    background: #ff6262;
    margin-top: 1rem;
    border-radius: 2rem;
}
</style>


