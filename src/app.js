import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './app.vue';

import axios from 'axios';
Vue.prototype.axios = axios;


import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});






/*
import HOME from './page/home.vue';
import TRAVEL from './page/travel.vue';
import SELECT from './page/select.vue';
import MINE from './page/mine.vue';
*/


// const HOME = () => require('./page/home.vue');
// const TRAVEL = () => require('./page/travel.vue');
// const SELECT = () => require('./page/select.vue');
// const MINE = () => require('./page/mine.vue');

const HOME   = r => require.ensure([], () => r(require('./page/home.vue')), 'home');
const TRAVEL = r => require.ensure([], () => r(require('./page/travel.vue')), 'travel');
const SELECT = r => require.ensure([], () => r(require('./page/select.vue')), 'select');
const MINE   = r => require.ensure([], () => r(require('./page/mine.vue')), 'mine');
const LOGIN  = r => require.ensure([], () => r(require('./page/login.vue')), 'login');

const test = r => require.ensure([], () => r(require('./page/test.vue')), 'test');
const swiper = r => require.ensure([], () => r(require('./page/swiper.vue')), 'swiper');

const routes = [
  {
    path:'*',
    redirect:'/home'
  },
  {
    path:'/home',
    component: HOME,
    meta:{index:0}
  },
  {
    path:'/travel',
    component: TRAVEL,
    meta:{index:1}
  },
  {
    path:'/select',
    component: SELECT,
    meta:{index:2}
  },
  {
    path:'/mine',
    component: MINE,
    meta:{index:3, requireAuth:true}
  },
  {
    path:'/login',
    component: LOGIN,
    meta:{index:6}
  },
  {
    path:'/test',
    component: test,
    meta:{index:4}
  },
  {
    path:'/swiper',
    component: swiper,
    meta:{index:5}
  }
];





const router = new VueRouter({
  routes:routes,
  mode: 'history',
});

router.beforeEach((to, from, next)=>{
    if(to.matched.some(res => res.meta.requireAuth)){
      const userinfo = window.localStorage.userinfo;
      if(userinfo){
        next();
      }else{
        next('/login');
      }
    }else{
      next();
    }
});


var app = new Vue({
  el: '#app',
  router,
//   data: {
//     message: 'Hello Vue!'
//   }
  render: h => h(App)
});