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
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#ffffff');
        changeColor('--fontColor', '#2e2f34')
      } else {
        document.getElementsByTagName('body')[0].style.setProperty('--defaultColor', '#2e2f34');
        changeColor()
      }
      this.isLight=!this.isLight
    },
  },
}
</script>

<style scoped>

</style>