<template>
    <!--this is the landing page with navigation to all pages-->
    <div id="home-screen">
        <h2 class="title">פקלון<span class="mobile-break"> </span> תרגולת טיסה</h2>
        <p class="message">
            ברוכים הבאים לפקלון טנ"ה הטסה של חיל הגנת הגבולות!
            <br>
            בחרו אחד מהנושאים, ניתן לחזור בכל עת לדף הבית.
        </p>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>6</h1>
                        <h2>אודות</h2>
                        <img src="../assets/navs/about.png" class="icons"/>
                        <p>קרדיטים, משאבים ועוד.</p>
                        <button class="btn btn-primary" style="background-color:#316b30 ; border-color:#2e632d" @click="navigate('about')">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>5</h1>
                        <h2>איבוד RF וGPS</h2>
                        <img src="../assets/navs/lost.png" class="icons"/>
                        <p>שיבושים, בעיות קליטה וחסימות</p>
                        <button class="btn btn-primary" style="background-color:#f1ad15 ; border-color:#d8a021" @click="navigate('communication')">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>4</h1>
                        <h2>סוגי הטסה ותרגולות</h2>
                        <img src="../assets/navs/advanced.png" class="icons"/>
                        <p>מרובע, שמינייה, מעגל אינדיאני ועוד</p>
                        <button class="btn btn-primary" style="background-color:#dab87c ; border-color:#d2b279" @click="navigate('advancedo')">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>3</h1>
                        <h2>תיאום אווירי</h2>
                        <img src="../assets/navs/coordination.png" class="icons"/>
                        <p>נוהל קרב, יב"א ומרכז סנכרון, תשל"ס</p>
                        <button class="btn btn-primary" style="background-color:#1b4559 ; border-color:#123242" @click="navigate('coordination')">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>2</h1>
                        <h2>הכנות מקדימות</h2>
                        <img src="../assets/navs/preperation.png" class="icons"/>
                        <p>המראה, נחיתה, בדיקות.</p>
                        <button class="btn btn-primary" style="background-color:#961f20 ; border-color:#6d1212" @click="navigate('preperations')">התחל</button>
                    </div>
                </div>
                <div class="carousel-item active">
                    <div class="d-block w-100 item-card">
                        <h1>1</h1>
                        <h2>הגדרות ומושגים</h2>
                        <img src="../assets/navs/defs.png" class="icons"/>
                        <p>כלל ההגדרות והמושגים</p>
                        <button class="btn btn-primary" style="background-color:#6471b3 ; border-color:#3b4780" @click="navigate('defenitions')">התחל</button>
                    </div>
                </div>
    
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon adjust" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon adjust" aria-hidden="true"></span>
            </button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name : 'home-screen',
    methods : {
        navigate(pageName){
          this.$router.push('/teneHatasa/'+pageName);
        }
    }
};
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

#home-screen{
    position: fixed;
    top:0%;
    right:0%;
    height: 100vh;
    width: 100vw;
    color:white;
    min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  font-family: 'text-font';
  
}

.title{
    position: fixed;
    width:100%;
    top:4%;
    text-align: center;
    font-family: 'title-font';
    font-size: 10vmin;
    right:50%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8);
}

.mobile-break::after {
  content: "\A"; /* Inserts a line break */
  white-space: pre-line;
}


.message{
    font-family: text-font;
    width:90%;
    font-size: 6vmin;
    position: absolute;
    top:20%;
    right:50%;
    transform: translateX(50%);
}

.carousel{
    height: 70%;
    width: 90%;
    position: absolute;
    right:50%;
    transform: translateX(50%);
    top:40%;
    user-select: none;
}

.carousel-inner{
    border-radius: 30px;
    height: 70%;
}

.item-card{
    display: flex !important;
    height:50vh;
    width:60vh;
    background-color: rgba(255,255,255,0.44);
    align-content: stretch;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6%;
}

.adjust{
    position: absolute;
    top:50%;
    transform: translateY(50%);
}


.icons{
    height: 19vh;
    width: 19vh;
}

/* Remove the line break on larger screens */
@media (min-width: 768px) {
  .mobile-break::after {
    content: ""; /* Removes the break on desktops */
  }
  
  .title{
    font-size: 9vmin;
    top:2%
  }

  .carousel-inner{
    position: absolute;
    top:-10%;
    padding-top: -500px;
    
  }

  .carousel{
    width: 50%;
  }

  .message{
    font-size: 5vmin;
    top:15%;
  }
  
}
/*this represents mobile landscape view */
@media (min-width: 480px) and (max-width: 934px){
    .mobile-break::after {
    content: ""; /* Removes the break on desktops */
  }
  h1{
    font-size: 5vmin !important;
  }
  h2{
    font-size: 4vmin !important;
  }
  .carousel-inner{
    height: 50vh;
  }
  .item-card{
    height:50vh;
  }
  .title{
    font-size: 9vmin !important;
  }
  p{
    font-size: 3vmin !important;
  }
  .message{
    display: none;
  }
  .carousel{
    top: 25%;
  }

  .icons{
    display: none;
  }
}
/*tablet portrait view */
@media (min-width: 768px) and (max-width: 1023px){

}

/*tablet landscape view */
@media (min-width: 1024px) and (max-width: 1279px){

}

</style>