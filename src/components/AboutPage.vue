<template>
  <!--this is the credits comp! if you end up making changes to the code 
    feel free to add your name to the credit list in the json file.-->
    <div id="about-page">
        <h2 class="title">אודות</h2>
        <div class="text-container">
          <p class="about-text"> 
            {{ credits.statement }}
          </p>
          <p class="about-text" v-for="(line, index) in credits.credits" :key="index">{{ line }}</p>
        </div>
        <p class="about-text disclaimer">בבקשה צפו בעמוד זה במצב אנכי.</p>
        <h2 class="lower-title">בהצלחה והטסה נעימה!</h2>
    </div>
</template>

<script>
import credits from "../assets/credits.json"
export default {
    name:'about-page',
    data(){
        return{
          credits,
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'text-font';
  src: url('../assets/fonts/Fredoka-Regular.woff2') format("woff2");
}

@font-face {
  font-family: 'title-font';
  src: url('../assets/fonts/rubik.woff2') format("woff2");
}

#about-page{
    position: absolute;
    top:0%;
    right:0%;
    height: 100vh;
    width: 100vw;
    color:white;
    min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  
}

.title{
    position: fixed;
    width:100%;
    top:6%;
    text-align: center;
    font-family: 'title-font';
    font-size: 15vmin;
    right:50%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8);
    z-index: 3;
}

.about-text{
    font-family:'text-font';
    font-size:4vmin;
    line-height: 1 !important;
    padding: none !important;
}

.text-container{
  width: 100%;
  position: absolute;
  top:10%;
  height:70%;
  display: flex;
  flex-flow: column wrap;
  justify-content:center;
  padding-right: 3%;
  padding-left: 3% ;
  line-height: 1 !important;
  z-index: 1;
}

.lower-title{
  position: absolute;
    width:100%;
    top:70%;
    text-align: center;
    font-family: 'title-font';
    font-size: 8vmin;
    right:50%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8)
}

.disclaimer{
  display: none;
  font-size: 8vmin !important;
  position: absolute;
  top:40%;
  left:50%;
  transform: translateX(-50%);
}

/*this represents mobile landscape view */
@media (min-width: 480px) and (max-width: 934px){
     
  .title{
    font-size: 9vmin !important;
    position: absolute;
    top:2%;
  }
  .text-container{
    display: none;
  }

  .disclaimer{
    display: block;
  }
}

@media (min-width: 1025px){
  .title{
    font-size: 9vmin;
    top:2%;
  }
  .about-text{
    font-size: 3vmin;
  }
  .lower-title{
    top:80%;
    font-size: 6vmin;
  }
}
</style>