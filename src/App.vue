<template>
  <!--the root comp of the project-->
  <div id="app">
    <!--the banner-->
    <div class="banner">
      <img src="./assets/pele.png" class="pele logo"/>
      <img src="./assets/chail.png" class="chail logo"/>
    </div>
    <!--here we inject the apropriate component-->
    <router-view></router-view>
    <!--show home button for every page that isnt the homepage-->
    <img v-if="notHome" src="./assets/navs/home.png" class="home-btn" @click="rth"/>
  </div>
</template>

<script>

  export default{
    data() {
      return{

      }
    },
    computed : {
      notHome(){
        if(this.$route.path.includes('o')){return true}
        else{return false}
      }
    },
    methods : {
      rth(){
        this.$router.push('/teneHatasa')
      }
    }
  }
</script>

<style scoped>


#app{
  height: 100vh;
  width:100vw;
  position: absolute;
  top:0%;
  right:0%;
  background-color: #1d1d1b;
  min-height: 100vh;
  min-width: 100vw;
  direction: rtl;
  user-select: none;
}

.banner{
  height: 17vh;
  width:100vw;
  position: fixed;
  top:0%;
  right:0%;
  background-image: url('assets/mejuraf.png');
  z-index: 2;
}

.logo{
  position: absolute;
}

.pele{
  top:2%;
  right:2%;
  height:54%;
  width:19%;
}

.chail{
  height:50%;
  width:20%;
  top:4%;
  left:0.5%;
}

.home-btn{
  height: 15vmin;
  width: 15vmin;
  position: fixed;
  bottom: 2%;
  right:50%;
  transform: translateX(50%);
}

/*media breakpoints to make site compatible for portrait & landscape */

@media screen and (min-width: 768px){
  
  .pele{
    width:6%;
    right:1%;
    height:82%;
    top:10%;
  }

  .chail{
    left:1%;
    width: 6%;
    height: 80%;
    top:10%;
  }

  .banner{
    background-image: url('assets/mejuraf-big.png');
    height:14vh;
    background-size: 100% 100%;
  }

  .home-btn{
    height: 8vmin;
    width: 8vmin;
  }
}

/*this represents mobile landscape view */
@media (min-width: 480px) and (max-width: 934px){
  .pele{
    width: 6%;
    height: 80%;
  }
  .chail{
    height: 83%;
    width: 7%;
  }
}
</style>
