<template>
    <div class="basic-protocols">
        <h2 class="title">הטסה בסיסית</h2>
        <h3 class="subtitle">{{subtitles[subject]}}</h3>
        <div class="navs">
            <div v-if="subject > 0" >
                <p class="teasers tprev">{{subtitles[subject-1] }}</p>
                <img src="../assets/navs/prev.png" class="nav-item prev" @click="prev" />
            </div>
            <div v-if="subject < subjectsAmount -1">
                <p class="teasers tnext">{{subtitles[subject+1] }}</p>
                <img src="../assets/navs/next.png" class="nav-item next" @click="next"  />
            </div>   
        </div>
        

        <div class="subject" id="takeoff-remote" v-if="subject === 0">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        הוצאה מהפק"ל
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {{ basic.takeFromBag }}
                        <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="https://www.dropbox.com/scl/fi/3b5xq172ja8ozhrhmd8jx/.mp4?rlkey=6diqthzqehec93z9pv205fzpt&st=021xin8k&raw=1" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        הגדרץ גובה מנקה וחזרה הביתה
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum alias amet placeat eligendi sapiente quidem porro veritatis suscipit, necessitatibus quasi deserunt veniam nesciunt est nemo laborum dolorum ea eos.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        תקשורת RF וRTH
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        כיול מצפן
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {{basic.compassCaliberate}}
                        <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="https://www.dropbox.com/scl/fi/2da0zx6eir5dj3x9wpivl/.mp4?rlkey=zklgbtnsn5nhulsn7hmkagj93&st=ggfafhn5&raw=1" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        5 הממים, כיוון מצלמה ואנטנות
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {{ basic.fiveMemimPerlude }}
                        <ol>
                            <li v-for="(line , index) in basic.fiveMemimList" :key="index">{{ line }}</li>
                        </ol>
                        <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="https://www.dropbox.com/scl/fi/5jrvdr4wea2r64x1ebd7a/.mp4?rlkey=e8s8xc4q6pxtri2wpz15qkvb7&st=j20m555c&raw=1" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="subject" id="takeoff-drone" v-if="subject === 1">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        הדלקת הרחפן
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">כאן יופיעו כל הטקסט, סרטונים ודברים אחרים שרלוונטיים לסעיף
                        <br>
                        אפשר שכמה כרטיסיות יהיו פתוחות בו זמנית ואם הן חורגות מהמסך הן יהפכו לגלילה ויהיה כיף!! <br>
                        אני אפילו אוסיף עוד שורה של טקסט כדי שיהיה אפשר לראות את הגלילה <br>
                        ועכשיו ננסה לשים סרטון: <br>
                        
                    </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        חיבור להבים
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum alias amet placeat eligendi sapiente quidem porro veritatis suscipit, necessitatibus quasi deserunt veniam nesciunt est nemo laborum dolorum ea eos.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        מצלמה
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        סוללה
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {{ basic.battery }}
                        <video controls playsinline @fullscreenchange="handleFullscreen" class="video-in-acc">
                            <source src="https://www.dropbox.com/scl/fi/n6d9q9cpeeiwe5482pnx1/.mp4?rlkey=md9you92mzbfg6k4mjll5se7z&st=tqtcyhd9&raw=1" type="video/mp4">
                            הדפדפן שלכם לא תומך בסרטונים, נסו שנית מאוחר יותר
                        </video>
                    </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        חימוש מנועים + בדיקת רעש
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        פול סטיק והכנה לבדיקות
                    </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        בדיקות מחייבות
                    </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="subject === 2" class="subject" id="landing">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        5 הממים
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">כאן יופיעו כל הטקסט, סרטונים ודברים אחרים שרלוונטיים לסעיף
                        <br>
                        אפשר שכמה כרטיסיות יהיו פתוחות בו זמנית ואם הן חורגות מהמסך הן יהפכו לגלילה ויהיה כיף!! <br>
                        אני אפילו אוסיף עוד שורה של טקסט כדי שיהיה אפשר לראות את הגלילה <br>
                        כמו שאתם רואים יש חלוקה גם לתתי נושאים ואז לסעיפים קטנים יותר, וככה הכל מסודר ולא עמוס מידי
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        תפעול לקיפול
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum alias amet placeat eligendi sapiente quidem porro veritatis suscipit, necessitatibus quasi deserunt veniam nesciunt est nemo laborum dolorum ea eos.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        תפעול להחלפת סוללה
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="fold" class="subjext" v-if="subject === 3">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        נושא 1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">כאן יופיעו כל הטקסט, סרטונים ודברים אחרים שרלוונטיים לסעיף
                        <br>
                        אפשר שכמה כרטיסיות יהיו פתוחות בו זמנית ואם הן חורגות מהמסך הן יהפכו לגלילה ויהיה כיף!! <br>
                        אני אפילו אוסיף עוד שורה של טקסט כדי שיהיה אפשר לראות את הגלילה <br>
                        כמו שאתם רואים יש חלוקה גם לתתי נושאים ואז לסעיפים קטנים יותר, וככה הכל מסודר ולא עמוס מידי
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        נושא 2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum alias amet placeat eligendi sapiente quidem porro veritatis suscipit, necessitatibus quasi deserunt veniam nesciunt est nemo laborum dolorum ea eos.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        נושא 3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptates velit est, explicabo debitis dolore odit error rem vitae inventore dicta eaque odio accusantium quidem eius officia, provident aliquam!</div>
                    </div>
                </div>
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
            subtitles : ['המראה - שלט' , 'המראה - רחפן' , 'נחיתה' , 'קיפול  מרחב'],
            subject: 0,
            subjectsAmount:4,
            basic
        }
    },
    methods : {
        next(){
            if(this.subject < this.subjectsAmount -1 ) {
                this.subject++;
            }
        },
        prev(){
            if(this.subject > 0) {
                this.subject--;
            }
        },
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
    height: 20vh;
    width: 80vw;
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

    .video-in-acc{
        height: 55vh;
        width: 40vw;
    }
}

</style>