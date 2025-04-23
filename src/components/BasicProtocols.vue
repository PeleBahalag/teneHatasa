<template>
    <div class="basic-protocols">
        <h2 class="title">הכנות מקדימות</h2>

        <div class="subject">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        בדיקות מחייבות
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ basic.takeFromBag }}</p>
                        <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904310?h=19ad4cbaff"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        דגשי בטיחות, המראה + נחיתה
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ basic.madchefim }}</p>
                        <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904350?h=3de53339c4"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        בד"מ, חימוש מנועים
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ basic.battery }}</p>
                        <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904395?h=135bef5ce8"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        בדיקות אפליקציה
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{basic.compassCaliberate}}</p>
                        <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904439?h=5ec7c2282b"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        כיול מצפן
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ basic.sticks }}</p>
                        <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904546?h=94fbb770d7"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <!-- <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"> חמשת הממים </button> </h2> <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.fiveMemimPerlude }}</p> <ol> <li v-for="(item , index) in basic.fiveMemimList" :key="index">{{ item }}</li> </ol> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904479?h=05da8ed3cb" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven"> תרגולת המראה </button> </h2> <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.takeoff }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904588?h=b4bae8cb33" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight"> נחיתה </button> </h2> <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.landing }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904635?h=4bcff48898" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine"> קיפול רחפן </button> </h2> <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.fold }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904684?h=a01ef39abf" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> -->
                
            </div>
        </div>

    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import basic from "/src/assets/basic.json"

export default {
    name:'basic-protocols',
    data(){
        return{
            basic
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
    },
    
    
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

.basic-protocols{
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
    top:7%;
    text-align: center;
    font-family: 'title-font';
    font-size: 11vmin;
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
    height: 70%;
    top:17% !important;
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

.video-in-acc iframe {
  width: 100%;
  height: 100%;
}

.accordion-button::after {
  width: 1.25rem;  /* You can use vw, %, or clamp() for responsiveness */
  height: 1.25rem;
  background-size: contain;
}

.accordion-button::after {
  width: 3vmin;  /* You can use vw, %, or clamp() for responsiveness */
  height: 2vmin;
  background-size: contain;
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

    .video-in-acc{
        height: 55vh;
        width: 40vw;
    }
    .texts{
        width: 60%;
        margin: auto;
        font-size: 3vmin;
    }
    li{
        font-size: 3vmin;
    }
    .accordion-button{
        font-size: 3vmin;
    }
    .accordion{
        top:14.2% !important;
    }
    ol{
        width: 60%;
        margin: auto;
    }
}

</style>