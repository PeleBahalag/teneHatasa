<template>
    <div id="advanced-flight">
        <h2 class="title">הטסה מתקדמת</h2>

        <div class="subject">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        מעגל אינדיאני - GPS\VPS
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.indianCircle }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        מרובע - GPS/VPS
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.square }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        שמיניה דיגיטלית - GPS/VPS
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.digitalEight }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        איבוד אורינטאציה - GPS/VPS
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.disorientationPerlude }}</p>
                        <ol>
                            <li v-for="(item , index) in advanced.disorientationList" :key="index">{{ item }}</li>
                        </ol>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        הטסה ידנית במצב ATTI - שמירת מיקום קבוע
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiFixed }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        הטסה ידנית במצב ATTI - בלרינה
                    </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiBallerina }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        הטסה ידנית במצב ATTI - מעגל אינדיאני
                    </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiCircle}}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        הטסה ידנית במצב ATTI - ריבוע
                    </button>
                    </h2>
                    <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiSquare}}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        הטסה ידנית במצב ATTI - שמיניה דיגיטלית
                    </button>
                    </h2>
                    <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiEight }}</p>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                        הטסה ידנית במצב ATTI – איבוד אורינטאציה
                    </button>
                    </h2>
                    <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{{ advanced.attiDisorientationPerlude }}</p>
                        <ol>
                            <li v-for="(item , index) in advanced.attiDisorientationList" :key="index">{{ item }}</li>
                        </ol>
                        <!-- <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video> -->
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import advanced from "/src/assets/advanced.json"
export default {
    name:'advanced-flight',
    data(){
        return{
            advanced
        }
    },
    methods : {

        handleFullscreen() {
            const isFullscreen =
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement;

            if (isFullscreen && screen.orientation?.lock) {
                screen.orientation.lock("landscape").catch(() => {
                console.warn("Orientation lock not supported");
                });
            } else if (screen.orientation?.unlock) {
                screen.orientation.unlock();
            }
        },
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

#advanced-flight{
    position: absolute;
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

.nav-item {
    height: 15vmin;
    width: 15vmin;
}

.navs{
    width: 100%;
    position: fixed;
    bottom:2%;
    height: 15vmin;
}

.title{
    position: fixed;
    width:100%;
    top:6%;
    text-align: center;
    font-family: 'title-font';
    font-size: 10vmin;
    right:51%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8);
}

.subtitle{
    position: fixed;
    width:100%;
    top:12%;
    text-align: center;
    font-family: 'title-font';
    font-size: 5vmin;
    right:51%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8);
}

.prev{
    position: absolute;
    right:3%;
}

.next{
    position: absolute;
    left:3%;
    
}

.teasers{
    position: absolute;
    top:-30%;
    color:white;
    font-family: 'text-font';
    font-size: 3vmin;
}

.tprev{
    right:2%
}

.tnext{
    left:2%;
}

.accordion{
    position: absolute;
    top: 17% !important;
    height: 70%;
    width: 100%;
    overflow-y: scroll;
    overflow-x:hidden ;
}

.accordion-item{
    border-color: #80673c;
}

.accordion-body{
    background-color: #1d1d1b;
    color:white;
    user-select: all !important;
}

.accordion-button{
    background-color: #dab87c;
    
}

.accordion-button:not(.collapsed){
    background-color: #f1ad15;
    border-color: #80673c;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 206, 116, 0.5) !important; /* Change the color */
  border-color: #ffcc00 !important; /* Optional: Change border color */
}

.vid-div{
    padding:56.25% 0 0 0;
    position:relative;
}

.video-in-acc{
    height: 23vh;
    width: 75vw;
    padding: 3%;
    margin: auto;
    object-fit: cover;
}

@media (min-width: 768px) {
    .title{
        font-size: 8vmin;
        top:1%
    }

    .subtitle{
        font-size: 3vmin;
        top:9%
    }

    .nav-item{
        height: 8vmin;
        width: 8vmin;
    }
    
    .navs{
        height: 8vmin;
    }

    .teasers{
        font-size: 2vmin;
        top:-40%;
    }

    .tnext{
        left:3%
    }
    
    .tprev{
        right:3%;
    }
    
}
</style>