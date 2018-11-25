<template>
    <div class="login">
        <input type="text" v-model="logininfo.name">
        <input type="password" v-model="logininfo.pwd">

        <button @click="userlogin">登陆</button>
    </div>
</template>

<script>

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
            console.log(this.logininfo);
            this.axios.get('http://127.0.0.1:8000/user/login',{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res)=>{
                console.log(res);
            });
        }
    }
}
</script>
<style>
.login{
    display:flex;
    display:-webkit-flex;
    flex-direction:column;
}
.login input{
    height: 3rem;
    width: 80%;
    margin: 1rem auto;
    padding: 1rem 0.5rem;
    font-size: 1.5rem;
    border: 1px solid red;
}
.login button{
        height: 3rem;
    width: 80%;
    margin: 1rem auto;
    color: #fff;
    background: #999;
    font-size: 2rem;
}
</style>

