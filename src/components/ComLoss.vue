<template>
    <div id="com-loss">
        <h2 class="title">איבוד RC וGPS</h2>
        <div class="switch-container">
            <span style="margin: 3px;">GPS</span>
            <label class="switch">
            <input type="checkbox" v-model="isGps" />
            <span class="slider"></span>
            </label>
            <span style="margin: 3px;">RC</span>
        </div>
        <div class="subject" v-show="isGps">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        שיבוש
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts"></p>
                        
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        חסימה
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts"></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="subject" v-show="!isGps">
            <div class="accordion accordion-flush">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        בעיה בקליטה עולה
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts"></p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        בעיה בקליטה יורדת
                    </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts"></p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        חסימת תקשורת
                    </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="texts"></p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import loss from "../assets/loss.json"
export default {
    name: "com-loss",
    data(){
        return{
            loss,
            isGps : true
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

#com-loss{
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

.switch-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left:50%;
  transform: translateX(-48%);
  top:12.5%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 75px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width:28px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(40px);
}

@media (min-width: 768px) {
    .title{
        font-size: 6vmin;
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
    .switch-container{
        top:10% !important;
    }
    .video-in-acc{
        height: 55vh;
        width: 40vw;
    }
    ol{
        width: 60%;
        margin: auto;
    }
    
}
</style>