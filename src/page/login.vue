<template>
    <div class="login">
        <input type="text" v-model="logininfo.name" placeholder="请输入用户名">
        <input type="password" v-model="logininfo.pwd" placeholder="请输入密码">

        <button @click="userlogin">登陆</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            logininfo:{
                name:'',
                pwd:''
            }
        }
    },
    methods:{
        userlogin:function(){
            //console.log(this.logininfo);
            //this.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            axios.get('http://127.0.0.1:8000/user/login?name=33').then((res)=>{
                            console.log(res);
                        });
        }
    }
}
</script>
<style>
.login{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 80%;
    margin: 40% auto 0;
    border: 3px solid #b9b9b9;
    padding: 20% 0%;
    border-radius: 1rem;
}
.login input{
    height: 4rem;
    width: 80%;
    margin: 1rem auto;
    padding: 0.2rem 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 3px solid #4c4c4c;
    outline: none;
    font-size: 1.8rem;
}
.login button{
    height: 4rem;
    width: 80%;
    margin: 4rem auto 0;
    color: #fff;
    background: #4ca983;
    font-size: 1.8rem;
    border-radius: 0.5rem;
}
</style>

