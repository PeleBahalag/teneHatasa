<template>
    <div id="about-page">
        <h2 class="title">אודות</h2>
        <p class="about-text"> מקווים שאתם נהנים ונעזרים בפקלון! <br>
        הפרויקט התאפשר בזכות שיתוף פעולה נרחב בין החיל ומדור פל"א של בסיס סיירים. <br>
                 <br>
        מציג : [] יובל פרנסז <br>
        תכנות וגרפיקה: רב"ט מיכל אוסטרובסקי <br>
        צילום: טוראי שרה אמבה <br>
        עריכת וידיאו: טוראי ניר מגדל <br>
        גרפיקה: רב"ט ליבי לאון <br>
        רמ"דית: סמ"ר תמר שנהב <br>
        רת"ח: רס"ן שחר עמנואל <br>
        אישור הדרכתי: רס"ן ליאורה אמסלם
        </p>
        <h2 style="position: absolute;
    width:100%;
    top:80%;
    text-align: center;
    font-family: 'title-font';
    font-size: 8vmin;
    right:50%;
    transform: translateX(50%);
    text-shadow: 3px 2px 1px rgba(211, 211, 211, 0.8);">בהצלחה והטסה נעימה!</h2>
    </div>
</template>

<script>
export default {
    name:'about-page',
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
}

.about-text{
    font-family:'text-font';
    width: 100%;
    position:absolute;
    top:20%;
    padding: 3%;
    font-size: 6vmin;
}
</style>