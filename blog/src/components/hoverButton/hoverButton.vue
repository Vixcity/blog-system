<template>
  <div>
    <div v-if="type==1" class="flex">
      <div class="hoverButton" v-for="(item,index) in color" :key="index">
        <a href="javascript:void(0)">
          <i :class="icon[index]" :style="'color:'+item"></i>
        </a>
      </div>
    </div>
    <div v-if="type==2">
      <div class="btn" :style="styles">{{ text || 'HOVER ME'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hoverButton",
    props:['icon','color','type','text','styles'],
    created() {
      if(this.type==1){
        var style = document.createElement("style");
        document.head.appendChild(style);
        let sheet = style.sheet;
        for (let i in this.color){
          let a = parseInt(i)
          sheet.addRule('.hoverButton:nth-child('+(a+1)+') a::before','background-color:'+this.color[i]);
        }
      }
    },
  }
</script>

<style scoped>

</style>