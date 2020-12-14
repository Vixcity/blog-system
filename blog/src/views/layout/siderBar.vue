<template>
  <div class="siderBar" @click="siderBarClick">
    <div style="height:90vh;">
      我是侧边栏
      <div style="background:red;width:100%"></div>
    </div>
    <div class="changeLOD" @click="changeLOD">
      <i v-if="isLight" class="iconfont icon-yueliang icon_button"></i>
      <i v-else class="iconfont icon-taiyang icon_button"></i>
      <i class="iconfont icon-huidaodingbu icon_button"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "siderBar",
  data() {
    return {
      isLight:true
    }
  },
  methods: {
    siderBarClick(e) {
      e.stopPropagation()
    },
    changeLOD() {
      let changeColor = function (varName='--fontColor', color='#ffffff') {document.getElementsByTagName('body')[0].style.setProperty(varName, color)};
      if(!this.isLight) {
        changeColor('--defaultColor', '#ffffff')
        changeColor('--fontColor', '#2e2f34')
        changeColor('--noticeFontColor','#969696')
        changeColor('--blockquoteColor','#5c6b72')
        changeColor('--hrefColor','#0681d0')
        changeColor('--card-bg','#fff')
        changeColor('--avatarImgFilter',1)
        changeColor('--btnColor','#fcd985')
        changeColor('--btnHoverColor','#ff7242')
        changeColor('--cardDocColor','#49b1f5')
      } else {
        changeColor('--noticeFontColor','#efefef')
        changeColor('--defaultColor','#2e2f34')
        changeColor('--blockquoteColor','#f2f2f2')
        changeColor('--hrefColor','#f2f2f2')
        changeColor('--card-bg','#121212')
        changeColor('--avatarImgFilter',.8)
        changeColor('--btnColor','#1f1f1f')
        changeColor('--btnHoverColor','#787878')
        changeColor('--cardDocColor','#383838')
        changeColor()
      }
      this.isLight=!this.isLight
    },
  },
}
</script>

<style scoped>

</style>