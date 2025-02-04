<template>
  <div id="app">
    <div class="banner">
      <img src="./assets/pele.png" class="pele logo"/>
      <img src="./assets/chail.png" class="chail logo"/>
    </div>
    <home-screen id="home-screen" v-if="currentPage === 'home'" @move-page="navigate"></home-screen>
    <about-page v-if="currentPage === 'about'"></about-page>
    <img v-if="currentPage !== 'home'" src="./assets/navs/home.png" class="home-btn" @click="navigate('home')"/>
  </div>
</template>

<script>
  import HomeScreen from './components/HomeScreen.vue'
import AboutPage from './components/AboutPage.vue';
  export default{
    components:{"home-screen":HomeScreen,"about-page":AboutPage},
    data() {
      return{
        currentPage:'home',
      }
    },
    methods : {
      navigate(pageName){
        this.currentPage = pageName;
        console.log('Page changed to: ' + this.currentPage)
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
}

.banner{
  height: 17vh;
  width:100vw;
  position: fixed;
  top:0%;
  right:0%;
  background-image: url('assets/mejuraf.png');
  z-index: 0;
}

.logo{
  position: absolute;
}

.pele{
  top:4%;
  right:3%;
  height:50%;
  width:20%;
}

.chail{
  height:50%;
  width:18%;
  top:4%;
  left:2%;
}

.home-btn{
  height: 15vmin;
  width: 15vmin;
  position: absolute;
  bottom: 5%;
  right:50%;
  transform: translateX(50%);
}

/*media breakpoints to make site compatible for portrait & landscape */

@media screen and (min-width: 768px){
  .pele{
    width:8%;
    right:1%;
    height:60%;
  }

  .chail{
    left:1%;
    width: 7.5%;
    top:15%;
  }

  .banner{
    background-image: url('assets/mejuraf-big.png');
    height:14vh;
    background-size: 100% 100%;
  }
}
</style>
