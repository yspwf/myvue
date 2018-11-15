<template>
    <div id="footBtn">
        <router-link to="/home">精选</router-link>
        <router-link to="/select">发现</router-link>
        <router-link to="/travel">出行</router-link>
        <router-link to="/mine">我的</router-link>
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


