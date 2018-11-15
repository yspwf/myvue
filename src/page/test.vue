<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="container" ref="menuContainer" :class="{'left': isa}">    
        <div class="leftcon">坐沙发发送到发送到发感受到法国</div>
        <div class="rightcon">删除</div>
      </div>
  </v-touch>
</template>
<script>
export default {
  name: 'Queue',
  data () {
    return {
        isa: false
    }
  },
  methods: {
    swiperleft: function () {
        this.isa = true;
       // console.log("left");
      //this.$router.push({'path':'/queuehistory'});
    },
    swiperright: function () {
        this.isa = false;
        //console.log("right");
      ///this.$router.push({'path':'/home'});
    }
  }

}

</script>

<style>
.wrapper{
    border:1px solid red;
    height:10rem;
    width:120%;
   
}
.container{
    width:90%;
    height:10rem;
    position: relative;
    -webkit-transition: all 0.3s linear;
}
.leftcon{
    width:70%;
    height:10rem;
    position: absolute;
    left: 0;
    border:2px solid blue;
}
.rightcon{
    width:30%;
    height:10rem;
     position: absolute;
    left: 80%;
    border:2px solid green;
}
.left{
    -webkit-transform: translate(-30%, 0);
    -webkit-transition: all 0.3s linear;
}

</style>

