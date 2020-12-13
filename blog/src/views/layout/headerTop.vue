<template>
  <div class="header fixed">
    <span class="toHome">
      <a href="" style="font-family:TitilliumWeb">Vixcity</a>
    </span>
    <i class="iconfont icon-gengduo moreClose" @click="moreClick"></i>
  </div>
</template>

<script>
export default {
name: "header",
data() {
  return {
    
  }
},
methods: {
  moreClick(e) {
    e.stopPropagation()
    this.$emit('postSiderBar',document.getElementsByClassName('siderBar')[0].className)
    if(document.getElementsByClassName('moreClose')[0]){
      document.getElementsByClassName('moreClose')[0].className = 'iconfont icon-cha moreOpen'
      document.getElementsByClassName('header')[0].className = document.getElementsByClassName('header')[0].className + ' headeron'
      document.getElementsByClassName('siderBar')[0].className = document.getElementsByClassName('siderBar')[0].className + ' siderBarOn'
    } else {
      document.getElementsByClassName('moreOpen')[0].className = 'iconfont icon-gengduo moreClose'
      document.getElementsByClassName('header')[0].className = 'header fixed'
      document.getElementsByClassName('siderBar')[0].className = 'siderBar'
    }
  }
},
}
</script>

<style scoped>

</style>