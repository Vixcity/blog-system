<template>
  <div class="talkToMyself">
    <div id="fullpage">
      <div class="section active">
        Some section
      </div>
      <div class="section">
        <div class="slide">Side1</div>
        <div class="slide">Side2</div>
        <div class="slide">Side3</div>
        <div class="slide">Side4</div>
      </div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
    </div>
  </div>
</template>

<script>
const fullpage = require('../../assets/js/fullpage')

export default {
  name: "talkToMyself",
  data() {
    return {

    }
  },
  mounted() {
    new fullpage('#fullpage', {
      sectionsColor:["#ff5f45","#0798ec","#fc6c7c","#fec401"],
      anchors:["page1","page2","page3","page4"],
      navigation:true,
      navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
      slidesNavigation:true,
      afterLoad:function(anchorLink,index){
        console.log("afterLoad:anchorLink"+anchorLink+";index="+index);
      },
      onLeave:function(index,nextIndex,direction){
        console.log("onLeave:index"+index+";nextIndex="+nextIndex+";direction="+direction);
      },
      afterRender:function(){
        console.log("afterRender");
      },
      afterResize:function(){
        console.log("aterResize");
      }
    });
  }
}
</script>

<style scoped>
@import "../../style/fullpage/fullpage.css";
</style>