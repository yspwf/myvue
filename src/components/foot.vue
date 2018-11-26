<template>
    <div id="footBtn">
        <router-link to="/home">
            <i class="bgone"></i>
            <span>精选</span>
        </router-link>
        <router-link to="/select">
            <i class="bgtow"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/travel">
            <i class="bgthree"></i>
            <span>出行</span>
        </router-link>
        <router-link to="/mine">
            <i class="bgfour"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabs:['精选','发现','出行','我的'],
            num:1
        }
    },
    methods:{
        change(num){
            alert(num);
        }
    }
}
</script>


