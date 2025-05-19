<template>
    <div class="air-coordination">
        <h2 class="title">תיאום אווירי</h2>

        <div class="subject">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        נוהל קרב
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ coordination.nohalOpening }}</p>
                        <ol>
                            <li>{{ coordination.nohalList[0] }}</li>
                            <li>{{ coordination.nohalList[1] }}</li>
                            <li>{{ coordination.nohalList[2] }}</li>
                            <li>{{ coordination.nohalList[3] }}
                                <ul>
                                    <li v-for="(item , index) in coordination.hamnach" :key="index">{{ item }}</li>
                                </ul>
                            </li>
                            <li>{{ coordination.nohalList[4] }}</li>
                            <li>{{ coordination.nohalList[5] }}</li>
                            <li>{{ coordination.nohalList[6] }}</li>
                            <li>{{ coordination.nohalList[7] }}</li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        גופי תיאום אווירי
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ coordination.gufimOpening }}</p>
                        <p>
                            <span class="bold">יב"א - יחידת בקרה אווירית</span> - {{ coordination.yaba }}
                        </p>
                        <p>
                            <span class="bold">מב"א</span> - {{ coordination.maba }}
                        </p>
                        <p>
                            <span class="bold">מרכז סנכרון</span> - {{ coordination.merkaz }}
                        </p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        תשל"ס
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts">{{ coordination.tashlas }}</p>
                    </div>
                    </div>
                </div>
                
                
            </div>
        </div>

        </div>

</template>

<script>
import coordination from "../assets/coordination.json"
export default {
    name : 'air-coordination',
    data(){
        return{
            coordination,
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

@font-face {
  font-family: 'bold-font';
  src: url('../assets/fonts/bold.ttf');
}

.air-coordination{
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

.bold{
    font-weight: bolder;
    font-family: 'bold-font';
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