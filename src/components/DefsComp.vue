<template>
    <div id="defs-comp">
        <h2 class="title">הכנות מקדימות</h2>

        <div class="subject">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        מושגים
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ol>
                            <li v-for="(check , index) in defs.defs" :key="index">{{ check }}</li>
                        </ol>
                        <!-- <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904310?h=19ad4cbaff"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div> -->
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        מצבי טיסה
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul>
                            <li v-for="(cat , index) in defs.catergories" :key="index">{{ cat }}</li>
                        </ul>
                        <!-- <div class="video-in-acc">
                            <iframe
                                src="https://player.vimeo.com/video/1057904350?h=3de53339c4"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div> -->
                    </div>
                    </div>
                </div>
                
                <!-- <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"> חמשת הממים </button> </h2> <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.fiveMemimPerlude }}</p> <ol> <li v-for="(item , index) in basic.fiveMemimList" :key="index">{{ item }}</li> </ol> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904479?h=05da8ed3cb" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven"> תרגולת המראה </button> </h2> <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.takeoff }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904588?h=b4bae8cb33" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight"> נחיתה </button> </h2> <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.landing }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904635?h=4bcff48898" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine"> קיפול רחפן </button> </h2> <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <p class="texts">{{ basic.fold }}</p> <div class="video-in-acc"> <iframe src="https://player.vimeo.com/video/1057904684?h=a01ef39abf" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen ></iframe> </div> </div> </div> </div> -->
                
            </div>
        </div>

    </div>
</template>

<script>
import defs from "../assets/defs.json"
export default {
    data(){
        return{
            defs
        }
    }
}
</script>

<style scoped>
#defs-comp{
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
    top:6.5%;
    text-align: center;
    font-family: 'title-font';
    font-size: 9vmin;
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

.accordion-button::after {
  width: 1.25rem;  /* You can use vw, %, or clamp() for responsiveness */
  height: 1.25rem;
  background-size: contain;
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
</style>