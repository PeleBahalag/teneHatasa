<template>
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
                        <h1>4</h1>
                        <h2>אודות</h2>
                        <img src="../assets/navs/about.png"/>
                        <p>קרדיטים, משאבים ועוד.</p>
                        <button class="btn btn-primary" style="background-color:#316b30 ; border-color:#2e632d" @click="toAbout">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>3</h1>
                        <h2>הטסה מתקדמת</h2>
                        <img src="../assets/navs/advanced.png"/>
                        <p>מעגל אינדיאני, איבוד אוריאנטציה ומצב SPOFFING</p>
                        <button class="btn btn-primary" style="background-color:#dab87c ; border-color:#d2b279" @click="toAdvanced">התחל</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 item-card">
                        <h1>2</h1>
                        <h2>איבוד RF וGPS</h2>
                        <img src="../assets/navs/lost.png"/>
                        <p>זיהוי והכרזת תקלות, תרגולת מצב ATTI ואובדן RF</p>
                        <button class="btn btn-primary" style="background-color:#f1ad15 ; border-color:#dea016" @click="toLost">התחל</button>
                    </div>
                </div>
                <div class="carousel-item active">
                    <div class="d-block w-100 item-card">
                        <h1>1</h1>
                        <h2>תרגולות הטסה בסיסיות</h2>
                        <img src="../assets/navs/basicProtocols.png"/>
                        <p>המראה, נחיתה, קיפול מרחב.</p>
                        <button class="btn btn-primary" style="background-color:#43a342 ; border-color:#419c40" @click="toBasic">התחל</button>
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
    name:'home-screen',
    methods:{
        toAbout(){
            this.$emit("move-page","about");
        },
        toAdvanced(){
            this.$emit("move-page","advanced")
        },
        toLost(){
            this.$emit("move-page","lost")
        },
        toBasic(){
            this.$emit("move-page","basic")
        }
    }
};
</script>

<style>
@font-face {
  font-family: 'asakim';
  src: url('../assets/fonts/asakim.woff') format("woff");
}

@font-face {
  font-family: 'migdal';
  src: url('../assets/fonts/migdal.woff') format("woff");
}

#home-screen{
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
    top:4%;
    text-align: center;
    font-family: 'migdal';
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
    font-family: asakim;
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
    
    text-align: center;
    flex-direction: row;
    justify-content: space-around;
    padding: 6%;
}

.adjust{
    position: absolute;
    top:50%;
    transform: translateY(50%);
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

</style>