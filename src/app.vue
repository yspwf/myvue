<template>
    <div>
        <!--
            <transition :name="transitionName">
                <router-view class="mainview"></router-view>   
            </transition>
        -->
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        
    </div>
</template>
<script>
import foot from './components/foot.vue';
export default {
    data(){
        return {
            transitionName: ''
        }
    },
    methods:{
    
    },
    components:{
        font:foot
    },
    watch:{
        $route(to, from){
            if(to.meta.index > from.meta.index){
                this.transitionName = 'slide-left';
            }else{
                this.transitionName = 'slide-right';
            }
        }
    }
    /*
    beforeRouteUpdate (to, from, next) {
        // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
        let isBack = this.$router.isBack
        if (isBack) {
            this.transitionName = 'slide-right'
        } else {
            this.transitionName = 'slide-left'
        }
        // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
        this.$router.isBack = false
            next()
        }
        */
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    width: 100%;
}
a{
    text-decoration: none;
    color:#212121;
}
img{
    display: block;
    height: auto;
    max-width: 100%;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    will-change: transform;
    transition:all 500ms cubic-bezier(.55,0,.1,1);
    position: absolute;
}

.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}


/*
.mainview{
    position: absolute;
    width: 100%;
    transition: all 0.8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
*/

.main{
    background-color: #f1f1f1;
    margin-bottom: 10rem;
}


#footBtn{
    position: fixed;
    bottom: -0.2rem;
    display: flex;
    display: -webkit-flex;
}
#footBtn a{
    width: 27%;
    text-align: center;
    background-color: #fbfbfb;
    font-size:1.5rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
#footBtn a i{
    display: block;
    height: 2rem;
    width: 100%;
    margin: 1rem 0 0;
}
#footBtn a .bgone{
    background: url('./static/foot/find.png') no-repeat center;
    background-size: contain;
}
#footBtn a .bgtow{
    background: url('./static/foot/topic.png') no-repeat center;
    background-size: contain;
}
#footBtn a .bgthree{
    background: url('./static/foot/travel.png') no-repeat center;
    background-size: contain;
}
#footBtn a .bgfour{
    background: url('./static/foot/mine.png') no-repeat center;
    background-size: contain;
}

#footBtn a i img{
    height: 3.5rem;
    width: 40%;
    margin: 0 auto;
    padding-top: 0.5rem;
}
#footBtn a span{
    line-height: 2rem;
    height: 2rem;
    font-size: 1.2rem;
}

#footBtn .router-link-active{
    color: #65d889;
}

#footBtn .router-link-active .bgone {
    background: url('./static/foot/findsure.png') no-repeat center;
     background-size: contain;
}

#footBtn .router-link-active .bgtow {
    background: url('./static/foot/topicsure.png') no-repeat center;
     background-size: contain;
}


#footBtn .router-link-active .bgthree {
    background: url('./static/foot/travlesure.png') no-repeat center;
     background-size: contain;
}

#footBtn .router-link-active .bgfour {
    background: url('./static/foot/minesure.png') no-repeat center;
     background-size: contain;
}



</style>

