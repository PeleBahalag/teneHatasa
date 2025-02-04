<template>
    <div class="basic-protocols">
        <h2 class="title">הטסה בסיסית</h2>
        <h3 class="subtitle">{{subtitles[subject]}}</h3>
        <div class="navs">
            <div v-if="subject > 0" >
                <p class="teasers tprev">{{subtitles[subject-1] }}</p>
                <img src="../assets/navs/prev.png" class="nav-item prev" @click="prev" />
            </div>
            <div v-if="subject < 2">
                <p class="teasers tnext">{{subtitles[subject+1] }}</p>
                <img src="../assets/navs/next.png" class="nav-item next" @click="next"  />
            </div>   
        </div>


        <div class="subject" id="takeoff" v-if="subject === 0">
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
                        אני אפילו אוסיף עוד שורה של טקסט כדי שיהיה אפשר לראות את הגלילה
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

        <div v-if="subject === 1" class="subject" id="landing">
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

        <div id="fold" class="subjext" v-if="subject === 2">
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
export default {
    name:'basic-protocols',
    data(){
        return{
            subtitles : ['תרגולת המראה','תרגולת נחיתה','קיפול מרחב'],
            subject: 0,
            showNext: true,
            showPrev : false,
        }
    },
    methods : {
        next(){
            if(this.subject < 2) {
                this.subject++;
            }
            console.log('next was clicked it is now' + this.subject)
        },
        prev(){
            if(this.subject > 0) {
                this.subject--;
            }
            console.log('prev was clicked it is now' + this.subject)
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
    overflow: scroll;
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